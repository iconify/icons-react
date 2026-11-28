import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zvjtqi0ur.css';
import '../../css/r/re1jambce.css';
import '../../css/w/wx59eqbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zvjtqi0ur"/><path class="re1jambce"/><path class="wx59eqbyz"/></g>`,
		"fallback": "iconaut:save",
	});
}

export default Component;
