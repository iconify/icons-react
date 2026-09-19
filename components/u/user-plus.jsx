import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he1e84igr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he1e84igr"/>`,
		"fallback": "fa-solid:user-plus",
	});
}

export default Component;
