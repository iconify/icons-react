import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb7u_8b3m.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb7u_8b3m"/>`,
		"fallback": "whh:tuneinalt",
	});
}

export default Component;
