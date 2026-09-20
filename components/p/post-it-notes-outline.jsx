import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsj37ibve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsj37ibve"/>`,
		"fallback": "mdi:post-it-notes-outline",
	});
}

export default Component;
