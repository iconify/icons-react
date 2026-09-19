import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wyu27vjiy.css';
import '../../css/i/izla-acll.css';
import '../../css/o/o240cuqgc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wyu27vjiy"/><path class="izla-acll"/><path class="o240cuqgc"/></g>`,
		"fallback": "catppuccin:java-alt-1",
	});
}

export default Component;
