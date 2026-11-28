import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtmx9jbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtmx9jbzl"/>`,
		"fallback": "noviair-light:mic-pause",
	});
}

export default Component;
