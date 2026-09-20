import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/holapylfh.css';
import '../../css/m/mf7sus44a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="holapylfh"/><path clip-rule="evenodd" class="mf7sus44a"/></g>`,
		"fallback": "keyline-icons:milestone-sharp-duotone",
	});
}

export default Component;
