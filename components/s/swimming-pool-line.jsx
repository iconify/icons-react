import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc7_h46hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc7_h46hz"/>`,
		"fallback": "mingcute:swimming-pool-line",
	});
}

export default Component;
