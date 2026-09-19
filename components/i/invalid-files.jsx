import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utoaypbgw.css';
import '../../css/g/g5wik2b5z.css';
import '../../css/w/wcs-rgbvt.css';
import '../../css/i/it2au1p5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="utoaypbgw"/><path class="g5wik2b5z"/><path class="wcs-rgbvt"/><path class="it2au1p5y"/></g>`,
		"fallback": "icon-park:invalid-files",
	});
}

export default Component;
