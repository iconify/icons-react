import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk08gj-bi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk08gj-bi"/>`,
		"fallback": "ion:play-forward",
	});
}

export default Component;
