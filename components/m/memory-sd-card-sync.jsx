import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ta16obr8y.css';
import '../../css/f/fp3x473jc.css';
import '../../css/e/es86b-bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ta16obr8y"/><path class="fp3x473jc"/><path class="es86b-bnb"/></g>`,
		"fallback": "streamline-freehand:memory-sd-card-sync",
	});
}

export default Component;
