import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aav1k0baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aav1k0baj"/>`,
		"fallback": "mynaui:play-hexagon-solid",
	});
}

export default Component;
