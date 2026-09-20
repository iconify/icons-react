import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlo2z0biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jlo2z0biu"/>`,
		"fallback": "solar:round-arrow-down-bold",
	});
}

export default Component;
