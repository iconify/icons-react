import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg0betbhc.css';
import '../../css/d/ddgckv3ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg0betbhc"/><rect class="ddgckv3ut"/>`,
		"fallback": "boxicons:queue",
	});
}

export default Component;
