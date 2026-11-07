import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s567sdlaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s567sdlaf"/>`,
		"fallback": "solar:rewind-5-seconds-forward-outline",
	});
}

export default Component;
