import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxled-bph.css';
import '../../css/a/ahlp5dbah.css';
import '../../css/f/fg7wbkb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-180 19.25 22.2)" class="lxled-bph"/><rect transform="rotate(-180 19.25 22.2)" class="ahlp5dbah"/><path class="fg7wbkb5q"/></g>`,
		"fallback": "andrsrxn:screenshot-vertical",
	});
}

export default Component;
