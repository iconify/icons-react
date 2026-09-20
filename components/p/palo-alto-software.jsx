import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx4qvpy-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx4qvpy-v"/>`,
		"fallback": "thesvg-color:palo-alto-software",
	});
}

export default Component;
