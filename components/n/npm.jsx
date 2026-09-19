import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yb79lbbgc.css';
import '../../css/r/rtv17ra5c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="yb79lbbgc"/><path class="rtv17ra5c"/></g>`,
		"fallback": "catppuccin:npm",
	});
}

export default Component;
