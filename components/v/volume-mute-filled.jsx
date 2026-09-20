import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slzco6b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slzco6b1m"/>`,
		"fallback": "reicon:volume-mute-filled",
	});
}

export default Component;
