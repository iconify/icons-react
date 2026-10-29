import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aml43npzb.css';
import '../../css/y/yf8s-acsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aml43npzb"/><path class="yf8s-acsy"/>`,
		"fallback": "withicons-bauhaus:pause",
	});
}

export default Component;
