import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgj4h-bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgj4h-bdw"/>`,
		"fallback": "flowbite:split-cells-outline",
	});
}

export default Component;
