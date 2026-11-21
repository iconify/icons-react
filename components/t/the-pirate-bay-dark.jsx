import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiemq2b-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiemq2b-v"/>`,
		"fallback": "selfhst:the-pirate-bay-dark",
	});
}

export default Component;
