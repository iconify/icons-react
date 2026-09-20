import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sceiphbpt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sceiphbpt"/>`,
		"fallback": "pinhead:raised-curb-with-question-mark",
	});
}

export default Component;
