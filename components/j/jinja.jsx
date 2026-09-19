import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-fd_m1_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-fd_m1_r"/>`,
		"fallback": "file-icons:jinja",
	});
}

export default Component;
