import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xcr788b5y.css';
import '../../css/g/gd19y7ihj.css';
import '../../css/i/ifus_3bzq.css';
import '../../css/l/lw75dwh1h.css';
import '../../css/i/i9pxz8bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xcr788b5y"/><path class="gd19y7ihj"/><path class="ifus_3bzq"/><path class="lw75dwh1h"/><path class="i9pxz8bmq"/></g>`,
		"fallback": "iconaut:low-bandwidth-needle",
	});
}

export default Component;
