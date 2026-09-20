import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qor1kflej.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qor1kflej"/>`,
		"fallback": "lsicon:order-done-outline",
	});
}

export default Component;
