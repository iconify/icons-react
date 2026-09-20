import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kax94e7dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kax94e7dz"/>`,
		"fallback": "mdi:religion-islamic",
	});
}

export default Component;
