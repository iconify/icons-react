import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfybevbjo.css';
import '../../css/n/n5z88vvff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sfybevbjo"/><path class="n5z88vvff"/></g>`,
		"fallback": "si:taxiing-duotone",
	});
}

export default Component;
