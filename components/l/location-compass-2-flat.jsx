import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/ps5j7mh9x.css';
import '../../css/m/m63r8obap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ps5j7mh9x"/><path class="m63r8obap"/></g>`,
		"fallback": "streamline-sharp-color:location-compass-2-flat",
	});
}

export default Component;
