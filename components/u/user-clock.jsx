import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb8jpq1oe.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb8jpq1oe"/>`,
		"fallback": "fa6-solid:user-clock",
	});
}

export default Component;
