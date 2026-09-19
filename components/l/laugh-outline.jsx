import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pa2owbcbt.css';
import '../../css/n/nbq6t4bru.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/w/wmrvracjj.css';
import '../../css/x/x-sjrbcab.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pa2owbcbt"/><path class="nbq6t4bru"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path clip-rule="evenodd" class="wmrvracjj"/><path class="x-sjrbcab"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`,
		"fallback": "glyphs:laugh-outline",
	});
}

export default Component;
