import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekx4z0myv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekx4z0myv"/>`,
		"fallback": "mingcute:omega-fill",
	});
}

export default Component;
