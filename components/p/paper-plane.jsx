import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cge0y-ejd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cge0y-ejd"/>`,
		"fallback": "simple-line-icons:paper-plane",
	});
}

export default Component;
