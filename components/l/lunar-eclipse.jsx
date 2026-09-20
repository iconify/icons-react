import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shvum10dz.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shvum10dz"/>`,
		"fallback": "wi:lunar-eclipse",
	});
}

export default Component;
