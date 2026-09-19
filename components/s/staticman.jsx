import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea92e7bct.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea92e7bct"/>`,
		"fallback": "cib:staticman",
	});
}

export default Component;
