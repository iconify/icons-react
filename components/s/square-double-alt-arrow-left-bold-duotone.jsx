import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/a/a8qzt_a5q.css';
import '../../css/d/dkxc4fbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="a8qzt_a5q"/><path class="dkxc4fbsz"/>`,
		"fallback": "solar:square-double-alt-arrow-left-bold-duotone",
	});
}

export default Component;
