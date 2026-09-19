import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g7ybvibsi.css';
import '../../css/a/ayzfjsbhm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="g7ybvibsi"/><path class="ayzfjsbhm"/></g>`,
		"fallback": "cryptocurrency-color:rub",
	});
}

export default Component;
