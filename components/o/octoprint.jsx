import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w040a9bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w040a9bcj"/>`,
		"fallback": "thesvg:octoprint",
	});
}

export default Component;
