import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgut2ibqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sgut2ibqs"/>`,
		"fallback": "solar:music-note-3-outline",
	});
}

export default Component;
