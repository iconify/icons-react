import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u98efjc-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u98efjc-z"/>`,
		"fallback": "streamline-ultimate:volume-control-warning-bold",
	});
}

export default Component;
