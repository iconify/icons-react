import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxniwlbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxniwlbsp"/>`,
		"fallback": "mynaui:panel-top-close-solid",
	});
}

export default Component;
