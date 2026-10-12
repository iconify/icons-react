import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wtetav95c.css';
import '../../css/z/zn5lxlbxr.css';
import '../../css/d/dv4be4bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wtetav95c"/><path class="zn5lxlbxr"/><path class="dv4be4bce"/></g>`,
		"fallback": "andrsrxn:police-badge",
	});
}

export default Component;
