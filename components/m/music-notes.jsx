import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbx3n7ihe.css';
import '../../css/p/pacvr6bmz.css';
import '../../css/w/w1x7dwb2u.css';
import '../../css/h/h207f311g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(72.37 6.06 17.17)scale(-1 1)" class="cbx3n7ihe"/><path class="pacvr6bmz"/><path class="w1x7dwb2u"/><path class="h207f311g"/></g>`,
		"fallback": "andrsrxn:music-notes",
	});
}

export default Component;
