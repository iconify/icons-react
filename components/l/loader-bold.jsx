import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfv4w8b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfv4w8b2d"/>`,
		"fallback": "solar:loader-bold",
	});
}

export default Component;
