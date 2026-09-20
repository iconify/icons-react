import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myj2pl2-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myj2pl2-e"/>`,
		"fallback": "lets-icons:refund-down",
	});
}

export default Component;
