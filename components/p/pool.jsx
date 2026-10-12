import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k959f_bvg.css';
import '../../css/y/ypwtp4bbd.css';
import '../../css/b/bathjdbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k959f_bvg"/><path class="ypwtp4bbd"/><path class="bathjdbdh"/></g>`,
		"fallback": "andrsrxn:pool",
	});
}

export default Component;
