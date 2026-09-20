import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrqy14fcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrqy14fcf"/>`,
		"fallback": "keyline-icons:moon",
	});
}

export default Component;
