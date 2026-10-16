import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-42pm0yt.css';
import '../../css/z/z1s72yb2q.css';
import '../../css/s/sehrn_bdd.css';
import '../../css/f/flvup0bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-42pm0yt"/><path class="z1s72yb2q"/><path class="sehrn_bdd"/><path class="flvup0bue"/></g>`,
		"fallback": "andrsrxn:list-user",
	});
}

export default Component;
