import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1imhmbtv.css';
import '../../css/l/l7647cc_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1imhmbtv"/><path class="l7647cc_c"/>`,
		"fallback": "solar:square-top-down-bold",
	});
}

export default Component;
