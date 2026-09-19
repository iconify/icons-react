import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygyd9kulc.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygyd9kulc"/>`,
		"fallback": "fontisto:underline",
	});
}

export default Component;
