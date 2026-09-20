import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr_ntm2dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr_ntm2dn"/>`,
		"fallback": "uil:sort-amount-up",
	});
}

export default Component;
