import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaswnybvf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaswnybvf"/>`,
		"fallback": "fa7-solid:person-rays",
	});
}

export default Component;
