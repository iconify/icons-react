import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_kpqtr2k.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_kpqtr2k"/>`,
		"fallback": "wi:night-alt-cloudy-high",
	});
}

export default Component;
