import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qempt5bxh.css';
import '../../css/e/e7pfvbb2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qempt5bxh"/><path class="e7pfvbb2f"/>`,
		"fallback": "selfhst:proval",
	});
}

export default Component;
