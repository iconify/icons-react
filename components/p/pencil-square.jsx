import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oie_c_l0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oie_c_l0r"/>`,
		"fallback": "heroicons-outline:pencil-square",
	});
}

export default Component;
