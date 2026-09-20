import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-f-pn66e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-f-pn66e"/>`,
		"fallback": "mdi:paper-add",
	});
}

export default Component;
