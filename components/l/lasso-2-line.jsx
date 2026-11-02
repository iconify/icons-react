import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcy_mewmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcy_mewmx"/>`,
		"fallback": "mingcute:lasso-2-line",
	});
}

export default Component;
