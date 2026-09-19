import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_ilsfbog.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_ilsfbog"/>`,
		"fallback": "el:search",
	});
}

export default Component;
