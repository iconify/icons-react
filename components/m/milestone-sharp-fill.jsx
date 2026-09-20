import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mf7sus44a.css';
import '../../css/v/vd9kgns_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="mf7sus44a"/><path class="vd9kgns_l"/></g>`,
		"fallback": "keyline-icons:milestone-sharp-fill",
	});
}

export default Component;
