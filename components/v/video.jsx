import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbzob9b3h.css';
import '../../css/d/dx3r8qbcz.css';
import '../../css/n/ny1tw4bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="gbzob9b3h"/><rect class="dx3r8qbcz"/><path class="ny1tw4bjo"/></g>`,
		"fallback": "andrsrxn:video",
	});
}

export default Component;
