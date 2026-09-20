import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r-4dyybkp.css';
import '../../css/r/rz8u1hbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r-4dyybkp"/><path class="rz8u1hbcz"/></g>`,
		"fallback": "streamline-freehand-color:product-launch-go-sign",
	});
}

export default Component;
