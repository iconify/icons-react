import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrh4tzs5r.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrh4tzs5r"/>`,
		"fallback": "fa-solid:lira-sign",
	});
}

export default Component;
