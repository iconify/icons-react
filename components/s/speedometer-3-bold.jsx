import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk_5tesqr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vk_5tesqr"/>`,
		"fallback": "glyphs:speedometer-3-bold",
	});
}

export default Component;
