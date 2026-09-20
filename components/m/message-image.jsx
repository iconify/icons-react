import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbpqdtu3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbpqdtu3i"/>`,
		"fallback": "pixelarticons:message-image",
	});
}

export default Component;
