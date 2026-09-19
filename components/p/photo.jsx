import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv7-5d-vk.css';

const viewBox = {"width":1920,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv7-5d-vk"/>`,
		"fallback": "fa:photo",
	});
}

export default Component;
