import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyau2rryt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyau2rryt"/>`,
		"fallback": "noviair-light:ping-pong",
	});
}

export default Component;
