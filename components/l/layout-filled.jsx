import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd_d6heja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fd_d6heja"/>`,
		"fallback": "tdesign:layout-filled",
	});
}

export default Component;
