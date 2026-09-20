import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdaeq515n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdaeq515n"/>`,
		"fallback": "tabler:versions-filled",
	});
}

export default Component;
