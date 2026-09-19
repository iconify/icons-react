import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwrquih0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwrquih0m"/>`,
		"fallback": "bxs:wallet",
	});
}

export default Component;
