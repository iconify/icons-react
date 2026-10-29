import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skgps-b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skgps-b1i"/>`,
		"fallback": "withicons:surprised-solid",
	});
}

export default Component;
