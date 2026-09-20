import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es71m-npu.css';
import '../../css/v/vx5rr602v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="es71m-npu"/><path class="vx5rr602v"/>`,
		"fallback": "qlementine-icons:menu-dots-circle-horizontal-16",
	});
}

export default Component;
