import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b2vlpabdt.css';
import '../../css/o/oi7bi6bzv.css';
import '../../css/c/cc61p4bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b2vlpabdt"/><path class="oi7bi6bzv"/><path class="cc61p4bvk"/></g>`,
		"fallback": "streamline-freehand-color:multimedia-controls-single-track",
	});
}

export default Component;
