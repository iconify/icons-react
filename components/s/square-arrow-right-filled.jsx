import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqw90dbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqw90dbua"/>`,
		"fallback": "reicon:square-arrow-right-filled",
	});
}

export default Component;
