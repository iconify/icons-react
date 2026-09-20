import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7v4pqbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7v4pqbqt"/>`,
		"fallback": "thesvg-color:plex",
	});
}

export default Component;
