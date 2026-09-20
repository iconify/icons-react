import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcl0_1bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mcl0_1bgh"/>`,
		"fallback": "si:more-vert-circle-fill",
	});
}

export default Component;
