import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujzyw6ual.css';
import '../../css/f/f_yhabbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujzyw6ual"/><path clip-rule="evenodd" class="f_yhabbpd"/></g>`,
		"fallback": "andrsrxn:search-scan",
	});
}

export default Component;
