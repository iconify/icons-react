import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-9xu-58k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j-9xu-58k"/>`,
		"fallback": "streamline-logos:mac-finder-logo-solid",
	});
}

export default Component;
