import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlwo-kb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlwo-kb1o"/>`,
		"fallback": "mingcute:sugar-coated-haws-fill",
	});
}

export default Component;
