import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqr8krjen.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fqr8krjen"/>`,
		"fallback": "streamline:music-note-1-solid",
	});
}

export default Component;
