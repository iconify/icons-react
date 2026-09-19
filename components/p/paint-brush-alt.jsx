import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwe3k093t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwe3k093t"/>`,
		"fallback": "carbon:paint-brush-alt",
	});
}

export default Component;
