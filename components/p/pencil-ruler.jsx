import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w7x-w78gs.css';
import '../../css/s/sq0akbbyk.css';
import '../../css/y/ymk1gwbhn.css';
import '../../css/e/ev9flfynh.css';
import '../../css/g/gbtfqg58b.css';
import '../../css/f/f3g1inb8b.css';
import '../../css/e/e4f-cxb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="w7x-w78gs wm-shadow"/><path class="sq0akbbyk"/><path class="ymk1gwbhn"/><path class="ev9flfynh"/><path class="gbtfqg58b"/><path class="f3g1inb8b wm-shine"/><path class="e4f-cxb6p wm-deco"/></g>`,
		"fallback": "withicons-sticker:pencil-ruler",
	});
}

export default Component;
