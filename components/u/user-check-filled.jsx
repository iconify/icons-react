import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e44evsbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e44evsbca"/>`,
		"fallback": "griddy-icons:user-check-filled",
	});
}

export default Component;
