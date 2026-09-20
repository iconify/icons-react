import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mc88-cbaw.css';
import '../../css/m/mr-903blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mc88-cbaw"/><path class="mr-903blt"/></g>`,
		"fallback": "keyline-icons:loader-sharp-duotone",
	});
}

export default Component;
