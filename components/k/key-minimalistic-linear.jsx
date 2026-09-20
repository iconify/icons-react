import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwo3olb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwo3olb_r"/>`,
		"fallback": "solar:key-minimalistic-linear",
	});
}

export default Component;
