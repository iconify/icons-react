import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqkdk3e9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqkdk3e9v"/>`,
		"fallback": "solar:move-3d-outline",
	});
}

export default Component;
