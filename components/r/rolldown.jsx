import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn5p7nbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn5p7nbzl"/>`,
		"fallback": "simple-icons:rolldown",
	});
}

export default Component;
