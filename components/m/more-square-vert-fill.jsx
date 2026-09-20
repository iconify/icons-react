import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_l8s7bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_l8s7bvd"/>`,
		"fallback": "si:more-square-vert-fill",
	});
}

export default Component;
