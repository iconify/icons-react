import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_8sl_z9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q_8sl_z9w"/>`,
		"fallback": "solar:smartphone-update-outline",
	});
}

export default Component;
