import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo8h1vk8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo8h1vk8m"/>`,
		"fallback": "cib:linux-foundation",
	});
}

export default Component;
