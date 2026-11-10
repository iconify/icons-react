import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcgubvbmp.css';
import '../../css/u/usocq_szd.css';
import '../../css/j/jj3ofccfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kcgubvbmp"/><path class="usocq_szd"/><path class="jj3ofccfi"/></g>`,
		"fallback": "andrsrxn:scale",
	});
}

export default Component;
