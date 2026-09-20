import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b75n16h0k.css';
import '../../css/l/lb9mvccia.css';
import '../../css/t/t98381bax.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="b75n16h0k"/><path class="lb9mvccia"/><path class="t98381bax"/></g>`,
		"fallback": "system-uicons:message",
	});
}

export default Component;
