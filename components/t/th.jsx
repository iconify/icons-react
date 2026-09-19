import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooe2_4l1n.css';
import '../../css/i/i0gz7cuwa.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ooe2_4l1n"/><path class="i0gz7cuwa"/></g>`,
		"fallback": "flagpack:th",
	});
}

export default Component;
