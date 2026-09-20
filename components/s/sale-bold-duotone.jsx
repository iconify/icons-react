import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qv_28mbpl.css';
import '../../css/g/gp40rmg8q.css';
import '../../css/w/we8ntkyae.css';
import '../../css/l/le3mabldv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qv_28mbpl"/><path class="gp40rmg8q"/><path class="we8ntkyae"/><path class="le3mabldv"/></g>`,
		"fallback": "solar:sale-bold-duotone",
	});
}

export default Component;
