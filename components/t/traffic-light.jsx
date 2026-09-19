import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on9_x8i1s.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on9_x8i1s"/>`,
		"fallback": "fa6-solid:traffic-light",
	});
}

export default Component;
