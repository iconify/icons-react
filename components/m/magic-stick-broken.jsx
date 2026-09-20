import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bh6lxezqg.css';
import '../../css/e/e_sfpxx6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bh6lxezqg"/><path class="e_sfpxx6x"/></g>`,
		"fallback": "solar:magic-stick-broken",
	});
}

export default Component;
