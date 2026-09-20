import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh1f_ub2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nh1f_ub2d"/>`,
		"fallback": "solar:waterdrop-bold",
	});
}

export default Component;
