import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1zx5f6ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1zx5f6ip"/>`,
		"fallback": "mdi:math-compass",
	});
}

export default Component;
