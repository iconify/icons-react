import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e36ltbb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e36ltbb-s"/>`,
		"fallback": "griddy-icons:jpg-file-filled",
	});
}

export default Component;
