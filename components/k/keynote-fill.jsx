import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7rezi-4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7rezi-4x"/>`,
		"fallback": "ri:keynote-fill",
	});
}

export default Component;
