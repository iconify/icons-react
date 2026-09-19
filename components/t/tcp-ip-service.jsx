import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntr9l2cws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntr9l2cws"/>`,
		"fallback": "carbon:tcp-ip-service",
	});
}

export default Component;
