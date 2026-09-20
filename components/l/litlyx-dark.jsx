import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp0s7ccec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp0s7ccec"/>`,
		"fallback": "selfhst:litlyx-dark",
	});
}

export default Component;
