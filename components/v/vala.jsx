import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho21jqoqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho21jqoqs"/>`,
		"fallback": "thesvg-color:vala",
	});
}

export default Component;
