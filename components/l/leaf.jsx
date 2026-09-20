import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz8h51bsd.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz8h51bsd"/>`,
		"fallback": "lineicons:leaf",
	});
}

export default Component;
