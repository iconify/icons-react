import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxj4q7bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxj4q7bdl"/>`,
		"fallback": "lineicons:microsoft",
	});
}

export default Component;
