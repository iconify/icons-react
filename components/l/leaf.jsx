import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwbt9r8zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwbt9r8zt"/>`,
		"fallback": "mynaui:leaf",
	});
}

export default Component;
