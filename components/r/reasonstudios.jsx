import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa3hvldyw.css';

const viewBox = {"width":456,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa3hvldyw"/>`,
		"fallback": "file-icons:reasonstudios",
	});
}

export default Component;
