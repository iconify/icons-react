import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckcrm-l0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckcrm-l0u"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-down-right-sharp",
	});
}

export default Component;
