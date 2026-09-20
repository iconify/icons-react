import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3tprn_1p.css';
import '../../css/e/e35tycczk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3tprn_1p"/><path class="e35tycczk"/>`,
		"fallback": "token:libre",
	});
}

export default Component;
