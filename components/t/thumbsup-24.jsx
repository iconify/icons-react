import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzmq702cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzmq702cr"/>`,
		"fallback": "octicon:thumbsup-24",
	});
}

export default Component;
