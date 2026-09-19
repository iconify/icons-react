import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v99hk5u_r.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v99hk5u_r"/>`,
		"fallback": "fa6-solid:slash",
	});
}

export default Component;
