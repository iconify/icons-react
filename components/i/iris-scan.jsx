import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiwv8_cbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiwv8_cbo"/>`,
		"fallback": "guidance:iris-scan",
	});
}

export default Component;
