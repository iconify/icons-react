import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h02zmjtek.css';
import '../../css/q/qy0rpabfw.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h02zmjtek"/><path class="qy0rpabfw"/>`,
		"fallback": "lineicons:upload",
	});
}

export default Component;
