import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x82w61quh.css';
import '../../css/g/g_opacblz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x82w61quh"/><path class="g_opacblz"/></g>`,
		"fallback": "glyphs:pen-1-duo",
	});
}

export default Component;
