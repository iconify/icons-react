import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-xvnbyw.css';

const viewBox = {"width":228,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wm-xvnbyw"/>`,
		"fallback": "thesvg-color:n8n",
	});
}

export default Component;
