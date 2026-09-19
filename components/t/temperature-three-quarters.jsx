import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1goxvk8b.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1goxvk8b"/>`,
		"fallback": "fa6-solid:temperature-three-quarters",
	});
}

export default Component;
