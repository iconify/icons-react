import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3kt8y1qb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3kt8y1qb"/>`,
		"fallback": "fa-solid:shoe-prints",
	});
}

export default Component;
