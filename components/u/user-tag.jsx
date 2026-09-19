import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tis9c0sli.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tis9c0sli"/>`,
		"fallback": "fa6-solid:user-tag",
	});
}

export default Component;
