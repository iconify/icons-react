import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciivncc0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ciivncc0l"/>`,
		"fallback": "griddy-icons:robot-filled",
	});
}

export default Component;
