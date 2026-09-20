import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pztk2dvxd.css';
import '../../css/t/t0zo1injx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pztk2dvxd"/><path class="t0zo1injx"/></g>`,
		"fallback": "streamline-color:landscape-setting-flat",
	});
}

export default Component;
