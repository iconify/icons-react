import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sduh0ya2a.css';
import '../../css/p/pvi37nbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sduh0ya2a"/><path class="pvi37nbff"/></g>`,
		"fallback": "andrsrxn:table-columns-plus",
	});
}

export default Component;
