import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/thyoeqb5j.css';
import '../../css/e/e8mfh5myc.css';
import '../../css/m/mbl7yg2xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="thyoeqb5j wm-shadow"/><path class="e8mfh5myc wm-shadow"/><path class="mbl7yg2xr"/></g>`,
		"fallback": "withicons-brutal:list-ordered",
	});
}

export default Component;
