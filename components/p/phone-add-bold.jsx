import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu7qyy4za.css';
import '../../css/a/a4g_h2opr.css';
import '../../css/x/xyijo7zcq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu7qyy4za"/><path class="a4g_h2opr"/><path class="xyijo7zcq"/></g>`,
		"fallback": "glyphs:phone-add-bold",
	});
}

export default Component;
