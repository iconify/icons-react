import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oshb_8hwn.css';
import '../../css/g/g5jvwrb-d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oshb_8hwn"/><path class="g5jvwrb-d"/></g>`,
		"fallback": "glyphs:map-signs-duo",
	});
}

export default Component;
