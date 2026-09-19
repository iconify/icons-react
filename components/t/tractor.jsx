import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_q6bmblh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_q6bmblh"/>`,
		"fallback": "fa6-solid:tractor",
	});
}

export default Component;
