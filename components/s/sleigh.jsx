import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcmmanq0s.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcmmanq0s"/>`,
		"fallback": "fa6-solid:sleigh",
	});
}

export default Component;
