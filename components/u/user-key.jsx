import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h99d28g7n.css';
import '../../css/i/i7nhoi20w.css';
import '../../css/l/l76wbdc6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h99d28g7n"/><circle class="i7nhoi20w"/><path class="l76wbdc6d"/></g>`,
		"fallback": "hugeicons:user-key",
	});
}

export default Component;
