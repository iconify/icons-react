import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0twd_pln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0twd_pln"/>`,
		"fallback": "mingcute:layout-leftbar-open-fill",
	});
}

export default Component;
