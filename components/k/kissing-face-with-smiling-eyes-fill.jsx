import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5hnrcbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5hnrcbox"/>`,
		"fallback": "iconamoon:kissing-face-with-smiling-eyes-fill",
	});
}

export default Component;
