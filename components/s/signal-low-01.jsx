import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1p0lil_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1p0lil_r"/>`,
		"fallback": "hugeicons:signal-low-01",
	});
}

export default Component;
