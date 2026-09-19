import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogpz_dbbw.css';
import '../../css/n/nkh_n2brk.css';
import '../../css/n/nyd6s9b3c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ogpz_dbbw"/><path class="nkh_n2brk"/><path class="nyd6s9b3c"/></g>`,
		"fallback": "glyphs:race-car-duo",
	});
}

export default Component;
