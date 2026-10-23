import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v81clhb9n.css';
import '../../css/k/kszrkfbfs.css';
import '../../css/t/txtzmqmoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v81clhb9n"/><path class="kszrkfbfs"/><path class="txtzmqmoo"/></g>`,
		"fallback": "andrsrxn:tulip",
	});
}

export default Component;
