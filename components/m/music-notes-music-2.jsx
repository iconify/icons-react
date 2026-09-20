import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owuglzbel.css';
import '../../css/f/f0zfi2mjl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owuglzbel"/><path class="f0zfi2mjl"/>`,
		"fallback": "streamline-pixel:music-notes-music-2",
	});
}

export default Component;
