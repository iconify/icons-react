import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/th5jkovxy.css';
import '../../css/r/r-89_xbkf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="th5jkovxy"/><path class="r-89_xbkf"/></g>`,
		"fallback": "lsicon:location-outline",
	});
}

export default Component;
