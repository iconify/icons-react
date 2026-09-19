import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-8vtntsb.css';
import '../../css/j/jwa0htbml.css';
import '../../css/g/gs1m2fbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p-8vtntsb"/><path class="jwa0htbml"/><path class="gs1m2fbso"/></g>`,
		"fallback": "iconamoon:location-pin-duotone",
	});
}

export default Component;
