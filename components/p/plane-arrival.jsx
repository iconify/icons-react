import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hssc50bzz.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hssc50bzz"/>`,
		"fallback": "fa6-solid:plane-arrival",
	});
}

export default Component;
