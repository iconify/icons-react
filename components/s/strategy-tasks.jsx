import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhxby1bcx.css';
import '../../css/y/yk-i_mbkh.css';
import '../../css/k/kg3owjulh.css';
import '../../css/b/b7g409bfi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yhxby1bcx"/><path class="yk-i_mbkh"/><path class="kg3owjulh"/><path class="b7g409bfi"/></g>`,
		"fallback": "streamline-color:strategy-tasks",
	});
}

export default Component;
