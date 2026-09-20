import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ul3wxg7ca.css';
import '../../css/p/p5853ld8s.css';
import '../../css/a/a7vsmybvj.css';
import '../../css/w/w0onx4o4e.css';

const viewBox = {"width":400,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="ul3wxg7ca"/><path class="p5853ld8s"/><path class="a7vsmybvj"/><path class="w0onx4o4e"/></g>`,
		"fallback": "thesvg-color:passport-js",
	});
}

export default Component;
