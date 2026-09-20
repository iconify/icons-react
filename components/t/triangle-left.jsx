import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqhu_g8oz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zqhu_g8oz"/>`,
		"fallback": "pepicons-pencil:triangle-left",
	});
}

export default Component;
