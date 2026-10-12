import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npr62rbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npr62rbrd"/>`,
		"fallback": "andrsrxn:not-superset-proper-of",
	});
}

export default Component;
