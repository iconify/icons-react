import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jve-jy1ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jve-jy1ns"/>`,
		"fallback": "thesvg-color:tricentis",
	});
}

export default Component;
