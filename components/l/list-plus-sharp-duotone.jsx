import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lke-2pb6e.css';
import '../../css/u/ue9ujtbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lke-2pb6e"/><path class="ue9ujtbdo"/></g>`,
		"fallback": "keyline-icons:list-plus-sharp-duotone",
	});
}

export default Component;
