import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf856hbbd.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf856hbbd"/>`,
		"fallback": "fa:snapchat-square",
	});
}

export default Component;
