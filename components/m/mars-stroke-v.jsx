import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkyf5esrh.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkyf5esrh"/>`,
		"fallback": "fontisto:mars-stroke-v",
	});
}

export default Component;
