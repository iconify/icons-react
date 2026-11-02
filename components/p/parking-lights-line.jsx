import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztgj2k7_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztgj2k7_i"/>`,
		"fallback": "mingcute:parking-lights-line",
	});
}

export default Component;
