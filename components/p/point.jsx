import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f98zace8k.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f98zace8k"/>`,
		"fallback": "gis:point",
	});
}

export default Component;
