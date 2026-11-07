import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t4hfc5sbl.css';
import '../../css/x/xwyp-bb1d.css';
import '../../css/m/me_j4dbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t4hfc5sbl"/><path class="xwyp-bb1d"/><path class="me_j4dbud"/></g>`,
		"fallback": "solar:pills-3-outline",
	});
}

export default Component;
