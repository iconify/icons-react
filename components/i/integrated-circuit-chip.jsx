import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqvkt6b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqvkt6b8y"/>`,
		"fallback": "mdi:integrated-circuit-chip",
	});
}

export default Component;
