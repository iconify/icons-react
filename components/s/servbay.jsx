import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkj1g9zqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkj1g9zqc"/>`,
		"fallback": "simple-icons:servbay",
	});
}

export default Component;
