import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkqk8irly.css';
import '../../css/c/cypjnfb0r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkqk8irly"/><path class="cypjnfb0r"/>`,
		"fallback": "lineicons:unlock",
	});
}

export default Component;
