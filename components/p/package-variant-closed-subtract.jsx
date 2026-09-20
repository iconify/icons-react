import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uymz8obqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uymz8obqt"/>`,
		"fallback": "mdi:package-variant-closed-subtract",
	});
}

export default Component;
