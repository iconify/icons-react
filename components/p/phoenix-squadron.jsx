import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbo3mlqmu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbo3mlqmu"/>`,
		"fallback": "la:phoenix-squadron",
	});
}

export default Component;
