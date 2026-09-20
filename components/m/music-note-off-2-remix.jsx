import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucd-cubam.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ucd-cubam"/>`,
		"fallback": "streamline:music-note-off-2-remix",
	});
}

export default Component;
