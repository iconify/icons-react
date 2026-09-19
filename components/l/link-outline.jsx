import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhiqdsc-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhiqdsc-v"/>`,
		"fallback": "famicons:link-outline",
	});
}

export default Component;
