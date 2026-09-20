import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6d1w-b2l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q6d1w-b2l"/>`,
		"fallback": "streamline:music-note-1-remix",
	});
}

export default Component;
