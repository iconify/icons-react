import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em-cw7emi.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em-cw7emi"/>`,
		"fallback": "jam:square-f",
	});
}

export default Component;
