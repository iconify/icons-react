import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1h-ul-cd.css';
import '../../css/v/v4bz0abgi.css';
import '../../css/g/gxzmdpsnv.css';
import '../../css/h/h3ivwac8i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w1h-ul-cd"/><path clip-rule="evenodd" class="v4bz0abgi"/><path class="gxzmdpsnv"/><path clip-rule="evenodd" class="h3ivwac8i"/></g>`,
		"fallback": "glyphs:sd-card-outline",
	});
}

export default Component;
