import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5e8d3bfq.css';
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
		"content": `<path class="secondary t5e8d3bfq"/><g class="dt0cm9dhy primary"><path class="zvjtqi0ur"/><path class="re1jambce"/><path class="wx59eqbyz"/></g>`,
		"fallback": "iconaut:save-duo",
	});
}

export default Component;
