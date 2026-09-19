import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp8-iy64m.css';
import '../../css/h/h1_6ehjfr.css';
import '../../css/g/g_73anbpq.css';
import '../../css/h/hrzr1dobv.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp8-iy64m"/><path class="h1_6ehjfr"/><g id="SVGTYOZ09iF"><path class="g_73anbpq"/><path class="hrzr1dobv"/></g><use width="100%" height="100%" href="#SVGTYOZ09iF" transform="matrix(-1 0 0 1 640 0)"/>`,
		"fallback": "flag:mo-4x3",
	});
}

export default Component;
