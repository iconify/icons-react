import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw8dj8x0t.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw8dj8x0t"/>`,
		"fallback": "fa6-solid:plane-circle-check",
	});
}

export default Component;
