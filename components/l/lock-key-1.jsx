import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ub8zy0l2v.css';
import '../../css/v/vnkm8eb0d.css';
import '../../css/c/cl2yen-js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ub8zy0l2v"/><path class="vnkm8eb0d"/><path class="cl2yen-js"/></g>`,
		"fallback": "streamline-freehand-color:lock-key-1",
	});
}

export default Component;
