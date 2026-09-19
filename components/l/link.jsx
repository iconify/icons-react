import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/capfaguaf.css';
import '../../css/a/atabikbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="capfaguaf"/><path class="atabikbtr"/>`,
		"fallback": "circum:link",
	});
}

export default Component;
