import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfqd_harf.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfqd_harf"/>`,
		"fallback": "lineicons:slice",
	});
}

export default Component;
