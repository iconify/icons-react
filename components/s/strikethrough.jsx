import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux_dwccpb.css';
import '../../css/v/vuued8ccn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ux_dwccpb"/><path class="vuued8ccn"/></g>`,
		"fallback": "glyphs-poly:strikethrough",
	});
}

export default Component;
