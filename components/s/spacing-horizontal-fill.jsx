import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjesy3bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjesy3bzr"/>`,
		"fallback": "mingcute:spacing-horizontal-fill",
	});
}

export default Component;
