import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/a/atiyfgbwu.css';
import '../../css/p/p1l1mibxh.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/g/g25jkbcju.css';
import '../../css/z/zc5vmwzag.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="atiyfgbwu"/><path class="p1l1mibxh"/></g><g class="x8poo_bjf"><circle class="atiyfgbwu"/><path class="g25jkbcju"/><path class="zc5vmwzag"/></g>`,
		"fallback": "openmoji:person-fencing",
	});
}

export default Component;
