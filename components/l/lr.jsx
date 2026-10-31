import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lg99vjbld.css';
import '../../css/j/jnos2iboi.css';
import '../../css/l/lg5pgeb-m.css';
import '../../css/r/rmew-gbom.css';

const viewBox = {"width":301,"height":159};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG5xdg6L1O" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" class="vc--wpv5i"/><stop offset="100%"/></linearGradient></defs><g class="ft5dv1b6b"><path class="lg99vjbld"/><path fill="url(#SVG5xdg6L1O)" class="jnos2iboi"/><path class="lg5pgeb-m"/><path class="rmew-gbom"/></g>`,
		"fallback": "cif:lr",
	});
}

export default Component;
