import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvuu3lwoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvuu3lwoi"/>`,
		"fallback": "thesvg-color:sessionize",
	});
}

export default Component;
