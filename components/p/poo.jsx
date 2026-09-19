import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vugygd5du.css';
import '../../css/b/bjggiqboe.css';
import '../../css/f/faeazbblb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vugygd5du"/><path class="bjggiqboe"/><path class="faeazbblb"/>`,
		"fallback": "fxemoji:poo",
	});
}

export default Component;
