import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpy2ylyls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpy2ylyls"/>`,
		"fallback": "andrsrxn:utility-pole",
	});
}

export default Component;
