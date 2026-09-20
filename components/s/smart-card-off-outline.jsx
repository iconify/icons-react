import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvi_e_b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvi_e_b5s"/>`,
		"fallback": "mdi:smart-card-off-outline",
	});
}

export default Component;
