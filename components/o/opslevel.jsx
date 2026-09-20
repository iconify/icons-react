import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtvukff6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtvukff6u"/>`,
		"fallback": "thesvg-color:opslevel",
	});
}

export default Component;
