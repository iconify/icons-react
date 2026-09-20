import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpa7wsbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpa7wsbct"/>`,
		"fallback": "thesvg-color:node-red",
	});
}

export default Component;
