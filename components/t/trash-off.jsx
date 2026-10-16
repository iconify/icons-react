import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgrts9b0u.css';
import '../../css/d/dlzw14w_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sgrts9b0u"/><path class="dlzw14w_o"/></g>`,
		"fallback": "andrsrxn:trash-off",
	});
}

export default Component;
