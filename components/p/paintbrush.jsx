import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg0fw_-ya.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg0fw_-ya"/>`,
		"fallback": "fluent-emoji-high-contrast:paintbrush",
	});
}

export default Component;
