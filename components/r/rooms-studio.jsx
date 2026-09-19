import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nez8o-1lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nez8o-1lc"/>`,
		"fallback": "cbi:rooms-studio",
	});
}

export default Component;
