import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/quuok3bmb.css';
import '../../css/r/r_ree2bmt.css';
import '../../css/p/p58s-8tnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="quuok3bmb"/><path class="r_ree2bmt"/><path class="p58s-8tnd"/></g>`,
		"fallback": "andrsrxn:stroke-cap-square",
	});
}

export default Component;
