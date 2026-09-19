import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp4bzibed.css';
import '../../css/b/bus_o2bxr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rp4bzibed"/><path class="bus_o2bxr"/></g>`,
		"fallback": "glyphs:phone-add-duo",
	});
}

export default Component;
