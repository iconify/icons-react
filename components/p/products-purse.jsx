import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hmzy87vxc.css';
import '../../css/s/sif8embcq.css';
import '../../css/j/jft-c8bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hmzy87vxc"/><path class="sif8embcq"/><path class="jft-c8bfx"/></g>`,
		"fallback": "streamline-freehand-color:products-purse",
	});
}

export default Component;
