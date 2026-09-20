import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npiauk8yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npiauk8yb"/>`,
		"fallback": "mdi:nature-people",
	});
}

export default Component;
