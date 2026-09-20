import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni_6xnbca.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni_6xnbca"/>`,
		"fallback": "lineicons:slack-line",
	});
}

export default Component;
