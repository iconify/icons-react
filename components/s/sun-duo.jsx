import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9u_gs11p.css';
import '../../css/o/olnbu5b2u.css';
import '../../css/e/ee660cc_n.css';
import '../../css/y/y147fwufd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w9u_gs11p"/><path class="olnbu5b2u"/><path class="ee660cc_n"/><path class="y147fwufd"/></g>`,
		"fallback": "glyphs:sun-duo",
	});
}

export default Component;
