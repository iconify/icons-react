import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnd2b7bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnd2b7bwn"/>`,
		"fallback": "coolicons:music-note-off-fill-round",
	});
}

export default Component;
