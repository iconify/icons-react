import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-wij4i-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-wij4i-x"/>`,
		"fallback": "famicons:subway-sharp",
	});
}

export default Component;
