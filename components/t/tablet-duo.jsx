import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5wwd1b0k.css';
import '../../css/i/iaq2-3bcy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p5wwd1b0k"/><path class="iaq2-3bcy"/></g>`,
		"fallback": "glyphs:tablet-duo",
	});
}

export default Component;
