import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llnjf5bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llnjf5bck"/>`,
		"fallback": "uiw:qq",
	});
}

export default Component;
