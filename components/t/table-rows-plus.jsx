import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sduh0ya2a.css';
import '../../css/t/t0wdpdbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sduh0ya2a"/><path class="t0wdpdbkb"/></g>`,
		"fallback": "andrsrxn:table-rows-plus",
	});
}

export default Component;
