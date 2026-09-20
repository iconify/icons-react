import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw8fn3uor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw8fn3uor"/>`,
		"fallback": "mdi:test-tube-off",
	});
}

export default Component;
