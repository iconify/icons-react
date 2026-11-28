import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp74bbcgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp74bbcgx"/>`,
		"fallback": "iconaut:ribbon-star-solid",
	});
}

export default Component;
