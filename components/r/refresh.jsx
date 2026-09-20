import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otj-atb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otj-atb6k"/>`,
		"fallback": "uil:refresh",
	});
}

export default Component;
