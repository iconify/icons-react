import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9ppn8jnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9ppn8jnd"/>`,
		"fallback": "solar:test-tube-minimalistic-outline",
	});
}

export default Component;
