import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx-12vb8f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gx-12vb8f"/>`,
		"fallback": "streamline:music-note-off-2-solid",
	});
}

export default Component;
