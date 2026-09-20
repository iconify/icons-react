import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t84a0c3hy.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t84a0c3hy"/>`,
		"fallback": "lineicons:pie-chart",
	});
}

export default Component;
