import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpc9vqboe.css';
import '../../css/y/yuye_93fh.css';
import '../../css/x/x-9fnkbnf.css';
import '../../css/t/tdnc6cbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kpc9vqboe"/><path class="yuye_93fh"/><path class="x-9fnkbnf"/><path class="tdnc6cbyy"/></g>`,
		"fallback": "hugeicons:joker",
	});
}

export default Component;
