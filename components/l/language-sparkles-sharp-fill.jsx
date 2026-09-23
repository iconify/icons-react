import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p4uwyib_m.css';
import '../../css/c/cwfjlnvpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p4uwyib_m"/><path class="cwfjlnvpy"/></g>`,
		"fallback": "keyline-icons:language-sparkles-sharp-fill",
	});
}

export default Component;
