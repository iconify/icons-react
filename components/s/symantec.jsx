import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlbb__bqd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlbb__bqd"/>`,
		"fallback": "cib:symantec",
	});
}

export default Component;
