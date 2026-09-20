import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd0fiy1eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd0fiy1eq"/>`,
		"fallback": "thesvg-color:mpv",
	});
}

export default Component;
