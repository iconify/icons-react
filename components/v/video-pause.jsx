import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8v331bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8v331bhv"/>`,
		"fallback": "noviair-light:video-pause",
	});
}

export default Component;
