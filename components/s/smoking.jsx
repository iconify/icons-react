import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8lajlb0j.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8lajlb0j"/>`,
		"fallback": "fa6-solid:smoking",
	});
}

export default Component;
