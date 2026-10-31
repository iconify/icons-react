import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhg5h_ghh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhg5h_ghh"/>`,
		"fallback": "coolicons:note-sparkle-corner-fill-round",
	});
}

export default Component;
