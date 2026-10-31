import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/d/djlv7xbdj.css';
import '../../css/n/nbxvyjb9e.css';
import '../../css/g/gyvuiliib.css';
import '../../css/i/ifpvq0b9y.css';
import '../../css/i/i0d46btni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="djlv7xbdj"/><path class="nbxvyjb9e"/><path class="gyvuiliib"/><path class="ifpvq0b9y"/><path class="i0d46btni"/></g>`,
		"fallback": "withicons-retro:square-x",
	});
}

export default Component;
