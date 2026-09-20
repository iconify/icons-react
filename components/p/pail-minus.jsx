import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjf5_gk6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjf5_gk6t"/>`,
		"fallback": "mdi:pail-minus",
	});
}

export default Component;
