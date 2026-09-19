import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq_x3ubjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq_x3ubjr"/>`,
		"fallback": "cbi:unifi",
	});
}

export default Component;
