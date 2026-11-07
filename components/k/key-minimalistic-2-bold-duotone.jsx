import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhw3f2lhi.css';
import '../../css/h/halx4mbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uhw3f2lhi"/><path class="halx4mbsp"/>`,
		"fallback": "solar:key-minimalistic-2-bold-duotone",
	});
}

export default Component;
