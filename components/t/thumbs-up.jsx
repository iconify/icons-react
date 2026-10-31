import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lt82r9lvc.css';
import '../../css/a/au0vr77bm.css';
import '../../css/m/map9qsb7c.css';
import '../../css/n/ntdufachd.css';
import '../../css/a/azzi-rk2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lt82r9lvc wm-shadow"/><path class="au0vr77bm wm-shadow"/><path class="map9qsb7c"/><path class="ntdufachd"/><path class="azzi-rk2o"/></g>`,
		"fallback": "withicons-brutal:thumbs-up",
	});
}

export default Component;
