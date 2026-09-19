import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0n02obus.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0n02obus"/>`,
		"fallback": "fa-solid:user-secret",
	});
}

export default Component;
