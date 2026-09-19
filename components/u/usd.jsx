import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ijrzxcbvm.css';
import '../../css/h/hc23kacha.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ijrzxcbvm"/><path class="hc23kacha"/></g>`,
		"fallback": "cryptocurrency-color:usd",
	});
}

export default Component;
