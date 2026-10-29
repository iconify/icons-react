import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vyfgkvoxh.css';
import '../../css/m/mirw1zb3v.css';
import '../../css/k/k5v8qbbbg.css';
import '../../css/j/jzp8m5cai.css';
import '../../css/j/joerhrb0c.css';
import '../../css/w/wvi839x8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vyfgkvoxh wm-shadow"/><path class="mirw1zb3v"/><path class="k5v8qbbbg"/><path class="jzp8m5cai"/><path class="joerhrb0c wm-shine"/><path class="wm-deco wvi839x8t"/></g>`,
		"fallback": "withicons-sticker:pencil",
	});
}

export default Component;
