import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gygliccmt.css';
import '../../css/b/b-5n7tu3i.css';
import '../../css/g/gn6pa2tcf.css';
import '../../css/e/epxndu55b.css';
import '../../css/s/s4uvh7boj.css';
import '../../css/h/hw0l3b_4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gygliccmt wm-shadow"/><path class="b-5n7tu3i"/><path class="gn6pa2tcf"/><path class="epxndu55b"/><path class="s4uvh7boj wm-shine"/><path class="hw0l3b_4d wm-deco"/></g>`,
		"fallback": "withicons-sticker:strikethrough",
	});
}

export default Component;
