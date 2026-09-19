import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je0er7b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="je0er7b4u"/>`,
		"fallback": "grommet-icons:status-placeholder",
	});
}

export default Component;
