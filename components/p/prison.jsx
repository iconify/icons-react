import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltxrrpu9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltxrrpu9f"/>`,
		"fallback": "hugeicons:prison",
	});
}

export default Component;
