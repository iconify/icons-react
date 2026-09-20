import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1-eh7tkj.css';
import '../../css/j/jdu6zub5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1-eh7tkj"/><path clip-rule="evenodd" class="jdu6zub5a"/>`,
		"fallback": "token:plex",
	});
}

export default Component;
