import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jf20jabau.css';
import '../../css/m/m9wpyibap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jf20jabau"/><path class="m9wpyibap"/></g>`,
		"fallback": "si:pentagon-duotone",
	});
}

export default Component;
