import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvcwa-j2s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvcwa-j2s"/>`,
		"fallback": "fa6-solid:podcast",
	});
}

export default Component;
