import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yq7wqq0em.css';
import '../../css/c/c36ls8boi.css';
import '../../css/r/rsp9libtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yq7wqq0em"/><path class="c36ls8boi"/><path class="rsp9libtc"/></g>`,
		"fallback": "streamline-freehand-color:resize-expand-arrow",
	});
}

export default Component;
