import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glxfj3qif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glxfj3qif"/>`,
		"fallback": "streamline-ultimate:list-numbers",
	});
}

export default Component;
