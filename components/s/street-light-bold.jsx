import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/c/cx9zm_rlh.css';
import '../../css/m/m8ofd8byy.css';
import '../../css/b/bn-g92bbr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="cx9zm_rlh"/><path class="m8ofd8byy"/><path class="bn-g92bbr"/></g>`,
		"fallback": "glyphs:street-light-bold",
	});
}

export default Component;
