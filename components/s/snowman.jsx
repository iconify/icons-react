import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0c1-ogyn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0c1-ogyn"/>`,
		"fallback": "fa7-solid:snowman",
	});
}

export default Component;
