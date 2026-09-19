import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx2prybdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx2prybdo"/>`,
		"fallback": "hugeicons:spirals",
	});
}

export default Component;
