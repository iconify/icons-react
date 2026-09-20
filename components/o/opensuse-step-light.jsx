import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e18-09vcd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e18-09vcd"/>`,
		"fallback": "selfhst:opensuse-step-light",
	});
}

export default Component;
