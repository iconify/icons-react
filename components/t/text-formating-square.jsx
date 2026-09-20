import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r2pch-97f.css';
import '../../css/z/zx8da_loy.css';
import '../../css/o/oy13cc5we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r2pch-97f"/><path class="zx8da_loy"/><path class="oy13cc5we"/></g>`,
		"fallback": "streamline-freehand-color:text-formating-square",
	});
}

export default Component;
