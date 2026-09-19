import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0je8-nta.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0je8-nta"/>`,
		"fallback": "fa6-solid:users-gear",
	});
}

export default Component;
