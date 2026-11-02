import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coe30gbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coe30gbdl"/>`,
		"fallback": "mingcute:shadow-fill",
	});
}

export default Component;
