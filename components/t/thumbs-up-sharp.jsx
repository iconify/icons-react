import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtg7lpbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtg7lpbko"/>`,
		"fallback": "pixelarticons:thumbs-up-sharp",
	});
}

export default Component;
