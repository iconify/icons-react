import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_7jfibdt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_7jfibdt"/>`,
		"fallback": "streamline-flex:music-note-circle-remix",
	});
}

export default Component;
