import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qooy-7upl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qooy-7upl"/>`,
		"fallback": "fa7-brands:postgresql",
	});
}

export default Component;
