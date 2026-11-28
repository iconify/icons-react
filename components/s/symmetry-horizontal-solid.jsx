import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vam74sbut.css';
import '../../css/i/ijyhaeb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vam74sbut"/><path class="ijyhaeb9d"/></g>`,
		"fallback": "iconaut:symmetry-horizontal-solid",
	});
}

export default Component;
