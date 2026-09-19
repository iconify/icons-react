import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctat3tulx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctat3tulx"/>`,
		"fallback": "fa7-solid:marker",
	});
}

export default Component;
