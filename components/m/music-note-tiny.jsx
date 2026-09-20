import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhdhs9bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhdhs9bgk"/>`,
		"fallback": "nrk:music-note-tiny",
	});
}

export default Component;
