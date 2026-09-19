import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilyzix5eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ilyzix5eu"/>`,
		"fallback": "griddy-icons:student-filled",
	});
}

export default Component;
