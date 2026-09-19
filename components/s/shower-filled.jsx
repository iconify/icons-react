import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm6p6wbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm6p6wbrs"/>`,
		"fallback": "griddy-icons:shower-filled",
	});
}

export default Component;
