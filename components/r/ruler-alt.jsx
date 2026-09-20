import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cntfi1b8n.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cntfi1b8n"/>`,
		"fallback": "lineicons:ruler-alt",
	});
}

export default Component;
