import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8ebzs-6d.css';
import '../../css/x/xpn136bpa.css';
import '../../css/r/rqvn39bdd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8ebzs-6d"/><path class="xpn136bpa"/><path class="rqvn39bdd"/></g>`,
		"fallback": "glyphs:tachometer-3-duo",
	});
}

export default Component;
