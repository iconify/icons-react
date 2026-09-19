import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5vd25u4s.css';

const viewBox = {"width":35,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5vd25u4s"/>`,
		"fallback": "fontisto:laravel",
	});
}

export default Component;
