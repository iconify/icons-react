import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap5zc5b2j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap5zc5b2j"/>`,
		"fallback": "zondicons:volume-up",
	});
}

export default Component;
