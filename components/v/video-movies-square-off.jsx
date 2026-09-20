import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i41kp_bfp.css';
import '../../css/z/z8wncuzib.css';
import '../../css/j/jo99vqg6z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i41kp_bfp"/><path class="z8wncuzib"/><path class="jo99vqg6z"/>`,
		"fallback": "streamline-pixel:video-movies-square-off",
	});
}

export default Component;
