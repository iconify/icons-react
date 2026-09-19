import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcl3y6bkj.css';
import '../../css/p/plthgm9xi.css';
import '../../css/z/zn72xdbnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcl3y6bkj"/><path class="plthgm9xi"/><path class="zn72xdbnx"/>`,
		"fallback": "ion:ios-today",
	});
}

export default Component;
