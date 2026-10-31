import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q8o2n5b_z.css';
import '../../css/i/iu1bzab0p.css';
import '../../css/z/znqedx-ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q8o2n5b_z wm-shadow"/><path class="iu1bzab0p wm-shadow"/><path class="znqedx-ve"/></g>`,
		"fallback": "withicons-brutal:list",
	});
}

export default Component;
