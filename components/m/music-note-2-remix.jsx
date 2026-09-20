import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb1o6dbkl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gb1o6dbkl"/>`,
		"fallback": "streamline:music-note-2-remix",
	});
}

export default Component;
