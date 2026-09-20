import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia0poz8wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia0poz8wi"/>`,
		"fallback": "thesvg-color:iobroker",
	});
}

export default Component;
