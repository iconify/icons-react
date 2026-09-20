import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj2za5ydl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj2za5ydl"/>`,
		"fallback": "stash:racket-solid",
	});
}

export default Component;
