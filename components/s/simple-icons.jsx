import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t37haoz4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t37haoz4q"/>`,
		"fallback": "thesvg-color:simple-icons",
	});
}

export default Component;
