import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os-g09bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os-g09bge"/>`,
		"fallback": "mdi:password-verified-outline",
	});
}

export default Component;
