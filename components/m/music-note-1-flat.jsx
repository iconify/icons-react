import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-6wmh33g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f-6wmh33g"/>`,
		"fallback": "streamline-color:music-note-1-flat",
	});
}

export default Component;
