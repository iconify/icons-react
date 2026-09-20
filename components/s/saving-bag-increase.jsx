import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sbto5_u1s.css';
import '../../css/d/daz3bxb2w.css';
import '../../css/t/tj-_z79bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sbto5_u1s"/><path class="daz3bxb2w"/><path class="tj-_z79bp"/></g>`,
		"fallback": "streamline-freehand-color:saving-bag-increase",
	});
}

export default Component;
