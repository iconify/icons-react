import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/ctkwnzbjp.css';
import '../../css/h/h_6h4nbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ctkwnzbjp"/><path class="h_6h4nbrn"/></g>`,
		"fallback": "keyline-icons:smartphone-arrow-down-left-sharp-two-tone",
	});
}

export default Component;
