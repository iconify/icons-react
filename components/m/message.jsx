import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiea85jfu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiea85jfu"/>`,
		"fallback": "fa6-solid:message",
	});
}

export default Component;
