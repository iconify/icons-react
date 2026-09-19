import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j91vxv8id.css';
import '../../css/v/vgqf9ebff.css';
import '../../css/h/hjpx-0bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="j91vxv8id"/><path class="vgqf9ebff"/><path class="hjpx-0bmo"/></g>`,
		"fallback": "bitcoin-icons:paper-bitcoin-outline",
	});
}

export default Component;
