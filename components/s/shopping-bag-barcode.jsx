import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g_nqkpbjv.css';
import '../../css/i/i2k_qbcwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g_nqkpbjv"/><path class="i2k_qbcwq"/></g>`,
		"fallback": "streamline-freehand-color:shopping-bag-barcode",
	});
}

export default Component;
