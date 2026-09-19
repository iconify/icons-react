import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v27n-xo4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v27n-xo4e"/>`,
		"fallback": "iconamoon:smiling-face-fill",
	});
}

export default Component;
