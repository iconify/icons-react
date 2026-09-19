import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xct43n9vy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xct43n9vy"/>`,
		"fallback": "icons8:up-round",
	});
}

export default Component;
