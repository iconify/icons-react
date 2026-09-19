import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgv4y0x0l.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgv4y0x0l"/>`,
		"fallback": "fa-solid:pump-soap",
	});
}

export default Component;
