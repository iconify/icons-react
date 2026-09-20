import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1t2jvjmb.css';
import '../../css/t/tizvf-b2j.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1t2jvjmb"/><path class="tizvf-b2j"/>`,
		"fallback": "lineicons:phone-set",
	});
}

export default Component;
