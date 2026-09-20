import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca9c8-5ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca9c8-5ga"/>`,
		"fallback": "ri:play-large-fill",
	});
}

export default Component;
