import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfwp-acbt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfwp-acbt"/>`,
		"fallback": "streamline:quality-education",
	});
}

export default Component;
