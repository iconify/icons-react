import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htge7-ppk.css';
import '../../css/j/jufqgnzlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htge7-ppk"/><path class="jufqgnzlz"/>`,
		"fallback": "circum:share-1",
	});
}

export default Component;
