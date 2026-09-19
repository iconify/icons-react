import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-bb-ol-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z-bb-ol-q"/>`,
		"fallback": "iconamoon:microphone-off-fill",
	});
}

export default Component;
