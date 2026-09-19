import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4erq1bzb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4erq1bzb"/>`,
		"fallback": "ion:male-female-sharp",
	});
}

export default Component;
