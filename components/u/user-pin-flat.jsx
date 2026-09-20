import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-1e_6z_e.css';
import '../../css/z/z3w2kobhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-1e_6z_e"/><path class="z3w2kobhq"/></g>`,
		"fallback": "streamline-plump-color:user-pin-flat",
	});
}

export default Component;
