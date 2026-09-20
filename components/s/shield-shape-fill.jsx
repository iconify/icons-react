import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rovq1db4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rovq1db4l"/>`,
		"fallback": "mingcute:shield-shape-fill",
	});
}

export default Component;
