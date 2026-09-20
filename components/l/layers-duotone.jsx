import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jm5xr6ipu.css';
import '../../css/d/d220fpynt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jm5xr6ipu"/><path class="d220fpynt"/></g>`,
		"fallback": "si:layers-duotone",
	});
}

export default Component;
