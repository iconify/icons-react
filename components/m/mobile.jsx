import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex2jck8xh.css';
import '../../css/z/zdqlz_b3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex2jck8xh"/><path clip-rule="evenodd" class="zdqlz_b3e"/>`,
		"fallback": "oui:mobile",
	});
}

export default Component;
