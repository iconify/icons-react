import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfgs5d_bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfgs5d_bi"/>`,
		"fallback": "mingcute:service-fill",
	});
}

export default Component;
