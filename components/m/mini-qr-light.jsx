import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p65yppbkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p65yppbkx"/>`,
		"fallback": "selfhst:mini-qr-light",
	});
}

export default Component;
