import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1rl6abob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1rl6abob"/>`,
		"fallback": "pixelarticons:upload",
	});
}

export default Component;
