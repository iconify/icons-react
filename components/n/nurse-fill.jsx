import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2ppnnbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v2ppnnbpm"/>`,
		"fallback": "mingcute:nurse-fill",
	});
}

export default Component;
