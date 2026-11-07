import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/q/qazb7jbeb.css';
import '../../css/y/y4zl2mbio.css';
import '../../css/o/o-v99zb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="qazb7jbeb"/><path class="y4zl2mbio"/><path class="o-v99zb0r"/>`,
		"fallback": "solar:menu-dots-square-bold-duotone",
	});
}

export default Component;
