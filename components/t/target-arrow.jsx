import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vfs6fvb9z.css';
import '../../css/f/feitoabjv.css';
import '../../css/y/y_ctxhbbn.css';
import '../../css/c/cialmtt2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vfs6fvb9z"/><path class="feitoabjv"/><path class="y_ctxhbbn"/><path class="cialmtt2c"/></g>`,
		"fallback": "iconaut:target-arrow",
	});
}

export default Component;
