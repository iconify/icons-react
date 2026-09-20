import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f036rfjik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f036rfjik"/>`,
		"fallback": "solar:key-minimalistic-square-3-outline",
	});
}

export default Component;
