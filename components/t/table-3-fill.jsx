import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp-3j-blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp-3j-blm"/>`,
		"fallback": "mingcute:table-3-fill",
	});
}

export default Component;
