import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq0upff5o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq0upff5o"/>`,
		"fallback": "garden:paperclip-12",
	});
}

export default Component;
