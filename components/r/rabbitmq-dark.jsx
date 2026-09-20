import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch-9y_2zg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch-9y_2zg"/>`,
		"fallback": "selfhst:rabbitmq-dark",
	});
}

export default Component;
