import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubs7q-uca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubs7q-uca"/>`,
		"fallback": "si:text-fill",
	});
}

export default Component;
