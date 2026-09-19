import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_t27sw-g.css';
import '../../css/x/x4c4cxb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_t27sw-g"/><path class="x4c4cxb_e"/>`,
		"fallback": "boxicons:lemon",
	});
}

export default Component;
