import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft1i4rbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft1i4rbvu"/>`,
		"fallback": "mdi:layers-clear",
	});
}

export default Component;
