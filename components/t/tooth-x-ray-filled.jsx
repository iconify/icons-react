import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb7iodb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bb7iodb3m"/>`,
		"fallback": "griddy-icons:tooth-x-ray-filled",
	});
}

export default Component;
