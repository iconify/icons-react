import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixase-blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixase-blp"/>`,
		"fallback": "mdi:playlist-note-outline",
	});
}

export default Component;
