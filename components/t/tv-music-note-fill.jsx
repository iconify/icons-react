import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7i1p681y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7i1p681y"/>`,
		"fallback": "f7:tv-music-note-fill",
	});
}

export default Component;
