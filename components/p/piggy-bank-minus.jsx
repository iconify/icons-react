import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuqh9yk4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuqh9yk4f"/>`,
		"fallback": "noviair-light:piggy-bank-minus",
	});
}

export default Component;
