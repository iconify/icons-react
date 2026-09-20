import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuf-q4kxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cuf-q4kxx"/>`,
		"fallback": "reicon:trellis-filled",
	});
}

export default Component;
