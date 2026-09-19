import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfluhxliu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfluhxliu"/>`,
		"fallback": "fa7-solid:person-arrow-down-to-line",
	});
}

export default Component;
