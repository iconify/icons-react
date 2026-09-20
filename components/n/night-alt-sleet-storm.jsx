import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffzgqjqfl.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffzgqjqfl"/>`,
		"fallback": "wi:night-alt-sleet-storm",
	});
}

export default Component;
