import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfqktd0wo.css';
import '../../css/w/wk8n8abhk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfqktd0wo"/><path clip-rule="evenodd" class="wk8n8abhk"/>`,
		"fallback": "qlementine-icons:ui-panel-right-16",
	});
}

export default Component;
