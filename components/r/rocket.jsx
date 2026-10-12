import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn2j90btw.css';
import '../../css/x/xiqk_sphk.css';
import '../../css/n/nnw99cbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wn2j90btw"/><path class="xiqk_sphk"/><path class="nnw99cbod"/></g>`,
		"fallback": "andrsrxn:rocket",
	});
}

export default Component;
