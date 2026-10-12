import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su2ruutrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su2ruutrf"/>`,
		"fallback": "andrsrxn:text-indent",
	});
}

export default Component;
