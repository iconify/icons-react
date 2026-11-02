import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkl1p4bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkl1p4bra"/>`,
		"fallback": "mingcute:route-fill",
	});
}

export default Component;
