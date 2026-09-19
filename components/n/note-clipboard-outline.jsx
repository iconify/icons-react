import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqhz5k-uj.css';
import '../../css/i/ivehi5u4g.css';
import '../../css/a/a0-uj79up.css';
import '../../css/q/qhecqmane.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqhz5k-uj"/><path clip-rule="evenodd" class="ivehi5u4g"/><path class="a0-uj79up"/><path clip-rule="evenodd" class="qhecqmane"/></g>`,
		"fallback": "glyphs:note-clipboard-outline",
	});
}

export default Component;
