import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jvo1hdcke.css';
import '../../css/e/eobmorp5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jvo1hdcke"/><path class="eobmorp5e"/></g>`,
		"fallback": "hugeicons:lungs",
	});
}

export default Component;
