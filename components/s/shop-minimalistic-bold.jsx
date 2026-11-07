import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg0ekvbvc.css';
import '../../css/m/mkq5lkj0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg0ekvbvc"/><path class="mkq5lkj0e"/>`,
		"fallback": "solar:shop-minimalistic-bold",
	});
}

export default Component;
