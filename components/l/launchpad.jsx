import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y50toubtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y50toubtm"/>`,
		"fallback": "thesvg-color:launchpad",
	});
}

export default Component;
