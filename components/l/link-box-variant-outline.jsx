import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5x223bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5x223bnd"/>`,
		"fallback": "mdi:link-box-variant-outline",
	});
}

export default Component;
