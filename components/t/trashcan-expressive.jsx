import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hsip1zt2o.css';
import '../../css/e/ekklpejfv.css';
import '../../css/b/bewe7xu9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hsip1zt2o"/><path class="ekklpejfv"/><path clip-rule="evenodd" class="bewe7xu9z"/></g>`,
		"fallback": "nrk:trashcan-expressive",
	});
}

export default Component;
