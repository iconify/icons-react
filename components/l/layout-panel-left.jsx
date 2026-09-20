import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7x8glb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7x8glb1w"/>`,
		"fallback": "mynaui:layout-panel-left",
	});
}

export default Component;
