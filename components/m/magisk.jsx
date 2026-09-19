import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp4a3ib0g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp4a3ib0g"/>`,
		"fallback": "cib:magisk",
	});
}

export default Component;
