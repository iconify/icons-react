import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lcf8j-but.css';
import '../../css/o/oux4yxb1b.css';
import '../../css/n/n_74cbbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lcf8j-but"/><path class="oux4yxb1b"/><path class="n_74cbbwp"/></g>`,
		"fallback": "lucide:swatch-book",
	});
}

export default Component;
