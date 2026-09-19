import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3mszq0-z.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3mszq0-z"/>`,
		"fallback": "fa:soccer-ball-o",
	});
}

export default Component;
