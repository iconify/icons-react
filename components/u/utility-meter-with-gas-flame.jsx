import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_vpqxbwh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_vpqxbwh"/>`,
		"fallback": "pinhead:utility-meter-with-gas-flame",
	});
}

export default Component;
