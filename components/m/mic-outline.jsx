import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnkgvjblm.css';

const viewBox = {"width":304,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnkgvjblm"/>`,
		"fallback": "zmdi:mic-outline",
	});
}

export default Component;
