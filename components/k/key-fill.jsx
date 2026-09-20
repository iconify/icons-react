import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy5k3mbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy5k3mbmo"/>`,
		"fallback": "ri:key-fill",
	});
}

export default Component;
