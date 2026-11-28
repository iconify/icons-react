import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyeje6p9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyeje6p9f"/>`,
		"fallback": "iconaut:mushroom-solid",
	});
}

export default Component;
