import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv1kbccre.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv1kbccre"/>`,
		"fallback": "fa6-solid:person-walking",
	});
}

export default Component;
