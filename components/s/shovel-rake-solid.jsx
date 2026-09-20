import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu9xycigl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qu9xycigl"/>`,
		"fallback": "streamline:shovel-rake-solid",
	});
}

export default Component;
