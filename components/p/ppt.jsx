import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r9ztc99mw.css';
import '../../css/z/zw37bnb8x.css';
import '../../css/m/m4vuqabns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="r9ztc99mw"/><path clip-rule="evenodd" class="zw37bnb8x"/><path class="m4vuqabns"/></g>`,
		"fallback": "icon-park-outline:ppt",
	});
}

export default Component;
