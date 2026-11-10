import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkv8d4byc.css';
import '../../css/d/doinxqbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkv8d4byc"/><path class="doinxqbwn"/></g>`,
		"fallback": "andrsrxn:screen-share-x",
	});
}

export default Component;
