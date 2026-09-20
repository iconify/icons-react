import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diklabb7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diklabb7e"/>`,
		"fallback": "streamline-pixel:video-movies-play",
	});
}

export default Component;
