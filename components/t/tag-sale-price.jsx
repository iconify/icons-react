import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zw6nc7b0r.css';
import '../../css/o/onm8dobqc.css';
import '../../css/l/l3pucg3gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zw6nc7b0r"/><path class="onm8dobqc"/><path class="l3pucg3gf"/></g>`,
		"fallback": "streamline-freehand-color:tag-sale-price",
	});
}

export default Component;
