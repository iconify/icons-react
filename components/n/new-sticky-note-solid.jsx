import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gby07cowi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gby07cowi"/>`,
		"fallback": "streamline-flex:new-sticky-note-solid",
	});
}

export default Component;
