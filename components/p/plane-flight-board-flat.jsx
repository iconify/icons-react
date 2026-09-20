import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nn44xybyw.css';
import '../../css/z/zj_459bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nn44xybyw"/><path class="zj_459bpk"/></g>`,
		"fallback": "streamline-sharp-color:plane-flight-board-flat",
	});
}

export default Component;
