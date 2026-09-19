import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kupkbm0sm.css';
import '../../css/s/sgs5pgp6p.css';
import '../../css/i/ihy1gojel.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kupkbm0sm"/><path clip-rule="evenodd" class="sgs5pgp6p"/><path class="ihy1gojel"/></g>`,
		"fallback": "glyphs-poly:layer-foward",
	});
}

export default Component;
