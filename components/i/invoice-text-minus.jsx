import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr9hn0c9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr9hn0c9r"/>`,
		"fallback": "mdi:invoice-text-minus",
	});
}

export default Component;
