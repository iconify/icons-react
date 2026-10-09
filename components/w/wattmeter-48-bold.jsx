import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5xcwtbtp.css';
import '../../css/d/dq7ui5iby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5xcwtbtp"/><path class="dq7ui5iby"/>`,
		"fallback": "energy-icons:wattmeter-48-bold",
	});
}

export default Component;
