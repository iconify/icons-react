import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tow-1j04m.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tow-1j04m"/>`,
		"fallback": "memory:tooltip-end-text",
	});
}

export default Component;
