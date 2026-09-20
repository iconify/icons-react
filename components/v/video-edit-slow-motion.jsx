import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n9ok10mse.css';
import '../../css/k/kztjlzbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n9ok10mse"/><path class="kztjlzbzs"/></g>`,
		"fallback": "streamline-freehand-color:video-edit-slow-motion",
	});
}

export default Component;
