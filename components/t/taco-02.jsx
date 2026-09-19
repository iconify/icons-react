import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jbeyhdbgx.css';
import '../../css/b/b6av4g9_k.css';
import '../../css/t/tc7ww-woh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jbeyhdbgx"/><path class="b6av4g9_k"/><path class="tc7ww-woh"/></g>`,
		"fallback": "hugeicons:taco-02",
	});
}

export default Component;
