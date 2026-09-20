import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmasnh69x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmasnh69x"/>`,
		"fallback": "lineicons:skipping-rope",
	});
}

export default Component;
