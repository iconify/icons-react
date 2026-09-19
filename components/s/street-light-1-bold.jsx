import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/k/k4fjjgpne.css';
import '../../css/c/cb4pivbaa.css';
import '../../css/k/k2vonydvu.css';
import '../../css/o/omy26obvw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="k4fjjgpne"/><path class="cb4pivbaa"/><path class="k2vonydvu"/><path class="omy26obvw"/></g>`,
		"fallback": "glyphs:street-light-1-bold",
	});
}

export default Component;
