import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb03xai3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jb03xai3q"/>`,
		"fallback": "keyline-icons:square-x-sharp-fill",
	});
}

export default Component;
