import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poj158kwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poj158kwi primary"/>`,
		"fallback": "iconaut:puzzle-off-duotone",
	});
}

export default Component;
