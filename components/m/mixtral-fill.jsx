import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugnvysp9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugnvysp9f"/>`,
		"fallback": "ri:mixtral-fill",
	});
}

export default Component;
