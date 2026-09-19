import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ubx9jsruy.css';
import '../../css/h/h-io8n9xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ubx9jsruy"/><rect class="h-io8n9xv"/></g>`,
		"fallback": "feather:video",
	});
}

export default Component;
