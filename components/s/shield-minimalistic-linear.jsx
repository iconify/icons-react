import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djh_z1beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djh_z1beg"/>`,
		"fallback": "solar:shield-minimalistic-linear",
	});
}

export default Component;
