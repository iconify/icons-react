import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2c72nr_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2c72nr_k"/>`,
		"fallback": "mdi:shield-star",
	});
}

export default Component;
