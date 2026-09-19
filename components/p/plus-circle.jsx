import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq_l1x1ff.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq_l1x1ff"/>`,
		"fallback": "fa:plus-circle",
	});
}

export default Component;
