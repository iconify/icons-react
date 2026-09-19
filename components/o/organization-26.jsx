import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og17uacas.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og17uacas"/>`,
		"fallback": "garden:organization-26",
	});
}

export default Component;
