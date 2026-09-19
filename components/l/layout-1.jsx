import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/q/q2fz3gsra.css';
import '../../css/f/fu9l_wgqv.css';
import '../../css/r/r64xafosv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="q2fz3gsra"/><rect class="fu9l_wgqv"/><rect class="r64xafosv"/></g>`,
		"fallback": "glyphs-poly:layout-1",
	});
}

export default Component;
