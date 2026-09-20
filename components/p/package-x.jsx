import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lycv_mydt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lycv_mydt"/>`,
		"fallback": "keyline-icons:package-x",
	});
}

export default Component;
