import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt56d1y2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gt56d1y2m"/>`,
		"fallback": "griddy-icons:tooth-gum-inflammation-filled",
	});
}

export default Component;
