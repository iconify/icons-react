import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn3_wfb-y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn3_wfb-y"/>`,
		"fallback": "pinhead:pixel-question-mark",
	});
}

export default Component;
