import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd8qo_zpy.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd8qo_zpy"/>`,
		"fallback": "fa6-solid:ticket",
	});
}

export default Component;
