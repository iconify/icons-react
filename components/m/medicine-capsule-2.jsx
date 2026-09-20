import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxf93rbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxf93rbng"/>`,
		"fallback": "streamline-cyber:medicine-capsule-2",
	});
}

export default Component;
