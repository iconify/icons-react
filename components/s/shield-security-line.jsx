import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy3dp1yll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy3dp1yll"/>`,
		"fallback": "si:shield-security-line",
	});
}

export default Component;
