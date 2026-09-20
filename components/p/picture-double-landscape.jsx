import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l8ujfflzo.css';
import '../../css/y/ytamnattm.css';
import '../../css/e/emqs3cc7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l8ujfflzo"/><path class="ytamnattm"/><path class="emqs3cc7m"/></g>`,
		"fallback": "streamline-freehand-color:picture-double-landscape",
	});
}

export default Component;
