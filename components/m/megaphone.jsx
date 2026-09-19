import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0ma9yb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0ma9yb3x"/>`,
		"fallback": "heroicons-outline:megaphone",
	});
}

export default Component;
