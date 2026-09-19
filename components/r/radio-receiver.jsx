import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w_s19rzwj.css';
import '../../css/p/p91u5peyy.css';
import '../../css/k/kkh7sievk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="w_s19rzwj"/><path class="p91u5peyy"/><path class="kkh7sievk"/></g>`,
		"fallback": "hugeicons:radio-receiver",
	});
}

export default Component;
