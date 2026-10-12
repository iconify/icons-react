import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhunjmbeo.css';
import '../../css/i/i1ccrl85q.css';
import '../../css/t/tevkc4bxr.css';
import '../../css/t/tv-tkebki.css';
import '../../css/l/l_vjgnpph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nhunjmbeo"/><path class="i1ccrl85q"/><path class="tevkc4bxr"/><path class="tv-tkebki"/><path class="l_vjgnpph"/></g>`,
		"fallback": "andrsrxn:sticker",
	});
}

export default Component;
