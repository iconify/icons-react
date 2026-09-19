import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psdu6ykly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="psdu6ykly"/>`,
		"fallback": "griddy-icons:volume-off-filled",
	});
}

export default Component;
