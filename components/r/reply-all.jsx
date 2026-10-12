import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jte_x1boc.css';
import '../../css/u/uybw88ckc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jte_x1boc"/><path class="uybw88ckc"/></g>`,
		"fallback": "andrsrxn:reply-all",
	});
}

export default Component;
