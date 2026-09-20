import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_v2uybww.css';
import '../../css/h/h02x7zt_x.css';
import '../../css/x/x4jwlob4g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u_v2uybww"/><path clip-rule="evenodd" class="h02x7zt_x"/><path clip-rule="evenodd" class="x4jwlob4g"/></g>`,
		"fallback": "streamline-color:shredder-flat",
	});
}

export default Component;
