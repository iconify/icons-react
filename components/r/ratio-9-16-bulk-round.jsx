import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxp5dfuyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxp5dfuyw"/>`,
		"fallback": "coolicons:ratio-9-16-bulk-round",
	});
}

export default Component;
