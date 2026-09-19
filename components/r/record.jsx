import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjtd9c19h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mjtd9c19h"/>`,
		"fallback": "hugeicons:record",
	});
}

export default Component;
