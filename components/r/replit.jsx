import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpd-v0buh.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpd-v0buh"/>`,
		"fallback": "thesvg-color:replit",
	});
}

export default Component;
