import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scu_z2bli.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scu_z2bli"/>`,
		"fallback": "fa6-solid:user-lock",
	});
}

export default Component;
