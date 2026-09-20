import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptdc-9sck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ptdc-9sck"/>`,
		"fallback": "solar:round-alt-arrow-left-outline",
	});
}

export default Component;
