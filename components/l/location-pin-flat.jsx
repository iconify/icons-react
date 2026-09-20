import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bkvoxinaf.css';
import '../../css/x/xwe23r2dk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bkvoxinaf"/><path class="xwe23r2dk"/></g>`,
		"fallback": "streamline-plump-color:location-pin-flat",
	});
}

export default Component;
