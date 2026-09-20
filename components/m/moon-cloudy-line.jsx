import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsagpqbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsagpqbqg"/>`,
		"fallback": "ri:moon-cloudy-line",
	});
}

export default Component;
