import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7_xhfb5l.css';
import '../../css/f/f_1_8rbpr.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7_xhfb5l"/><path class="f_1_8rbpr"/>`,
		"fallback": "lineicons:seo",
	});
}

export default Component;
