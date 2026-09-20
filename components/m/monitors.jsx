import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5lmjr0_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5lmjr0_g"/>`,
		"fallback": "mdi:monitors",
	});
}

export default Component;
