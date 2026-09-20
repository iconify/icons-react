import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4bm74j-d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4bm74j-d"/>`,
		"fallback": "streamline-pixel:video-movies-video-square",
	});
}

export default Component;
