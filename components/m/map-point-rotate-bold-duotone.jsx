import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x69ahabod.css';
import '../../css/f/fpe5n0b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x69ahabod"/><path class="fpe5n0b7y"/></g>`,
		"fallback": "solar:map-point-rotate-bold-duotone",
	});
}

export default Component;
