import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8gl3cc4j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w8gl3cc4j"/>`,
		"fallback": "streamline:recording-tape-bubble-square-solid",
	});
}

export default Component;
