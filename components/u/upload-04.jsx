import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9fx60lvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9fx60lvh"/>`,
		"fallback": "hugeicons:upload-04",
	});
}

export default Component;
