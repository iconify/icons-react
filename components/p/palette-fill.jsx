import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf90ifbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf90ifbbv"/>`,
		"fallback": "mingcute:palette-fill",
	});
}

export default Component;
