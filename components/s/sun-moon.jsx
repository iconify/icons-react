import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awdcmv7pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awdcmv7pf"/>`,
		"fallback": "hugeicons:sun-moon",
	});
}

export default Component;
