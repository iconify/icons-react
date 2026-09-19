import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmi7ujp6q.css';

const viewBox = {"width":1728,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmi7ujp6q"/>`,
		"fallback": "vs:sun",
	});
}

export default Component;
