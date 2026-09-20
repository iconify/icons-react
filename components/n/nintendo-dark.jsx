import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qagje-7km.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qagje-7km"/>`,
		"fallback": "selfhst:nintendo-dark",
	});
}

export default Component;
