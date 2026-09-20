import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vof2l4cbx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vof2l4cbx"/>`,
		"fallback": "streamline:music-note-off-1-remix",
	});
}

export default Component;
