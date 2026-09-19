import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htigj1b9g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htigj1b9g"/>`,
		"fallback": "fa7-solid:scroll-torah",
	});
}

export default Component;
