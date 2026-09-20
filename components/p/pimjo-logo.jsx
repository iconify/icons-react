import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvolx0pqg.css';
import '../../css/e/ex_99rxvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvolx0pqg"/><path class="ex_99rxvr"/>`,
		"fallback": "lineicons:pimjo-logo",
	});
}

export default Component;
