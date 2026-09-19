import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xz-zwdqsc.css';
import '../../css/n/n9_gztbdw.css';
import '../../css/i/i-5ejf2qe.css';
import '../../css/y/yj742hgsp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xz-zwdqsc"/><path class="n9_gztbdw"/><path class="i-5ejf2qe"/><path class="yj742hgsp"/></g>`,
		"fallback": "glyphs-poly:shopping-cart",
	});
}

export default Component;
