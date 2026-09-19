import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmj8f5ifm.css';

const viewBox = {"width":704,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmj8f5ifm"/>`,
		"fallback": "whh:paperclipvertical",
	});
}

export default Component;
