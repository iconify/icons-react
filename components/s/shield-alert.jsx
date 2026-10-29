import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzuye7bdg.css';
import '../../css/i/i1v6ehc1q.css';
import '../../css/l/l4zd81lns.css';
import '../../css/o/ofa3z5bje.css';
import '../../css/l/l7oghkb8u.css';
import '../../css/j/j6rnjebwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzuye7bdg"/><path class="i1v6ehc1q"/><path class="l4zd81lns"/><path class="ofa3z5bje"/><path class="l7oghkb8u wm-shine"/><path class="j6rnjebwe wm-deco"/></g>`,
		"fallback": "withicons-sticker:shield-alert",
	});
}

export default Component;
