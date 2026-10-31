import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wdjowwo9a.css';
import '../../css/x/xfayb1ind.css';
import '../../css/q/q-lh2pbfp.css';
import '../../css/f/fgsj01b4y.css';
import '../../css/c/c_j96-w8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wdjowwo9a wm-shadow"/><path class="xfayb1ind"/><path class="q-lh2pbfp"/><path class="fgsj01b4y"/><path class="c_j96-w8b"/></g>`,
		"fallback": "withicons-retro:shopping-cart",
	});
}

export default Component;
