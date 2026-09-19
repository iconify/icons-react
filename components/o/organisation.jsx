import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kyr0zdb1m.css';
import '../../css/f/fk1q4wb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kyr0zdb1m"/><path clip-rule="evenodd" class="fk1q4wb1l"/></g>`,
		"fallback": "gg:organisation",
	});
}

export default Component;
