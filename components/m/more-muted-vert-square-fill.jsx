import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyzt3kbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nyzt3kbps"/>`,
		"fallback": "si:more-muted-vert-square-fill",
	});
}

export default Component;
