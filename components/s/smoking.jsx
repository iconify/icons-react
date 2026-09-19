import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rio-24bds.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rio-24bds"/>`,
		"fallback": "fa-solid:smoking",
	});
}

export default Component;
