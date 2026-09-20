import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2mpopbcx.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2mpopbcx"/>`,
		"fallback": "system-uicons:panel-sectioned",
	});
}

export default Component;
