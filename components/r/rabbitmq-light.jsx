import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7l31kb1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7l31kb1z"/>`,
		"fallback": "selfhst:rabbitmq-light",
	});
}

export default Component;
