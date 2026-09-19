import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7o3n1bzz.css';
import '../../css/f/fhtrc8bpo.css';
import '../../css/w/wernx2b0c.css';
import '../../css/c/c-aa9eqjn.css';
import '../../css/n/n5v6d8b_n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o7o3n1bzz"/><path class="fhtrc8bpo"/><path clip-rule="evenodd" class="wernx2b0c"/><rect class="c-aa9eqjn"/><rect class="n5v6d8b_n"/></g>`,
		"fallback": "glyphs-poly:scooter",
	});
}

export default Component;
