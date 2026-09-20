import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pffvbac1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pffvbac1d"/>`,
		"fallback": "la:square-root-alt",
	});
}

export default Component;
