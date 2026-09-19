import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wil69gbpm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wil69gbpm"/>`,
		"fallback": "cryptocurrency:lend",
	});
}

export default Component;
