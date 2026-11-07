import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nstr2nbrd.css';
import '../../css/m/m4_d5pj1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nstr2nbrd"/><path class="m4_d5pj1i"/>`,
		"fallback": "solar:pin-bold-duotone",
	});
}

export default Component;
