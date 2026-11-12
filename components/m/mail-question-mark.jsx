import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lvahrq4nq.css';
import '../../css/j/j-xqrrbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lvahrq4nq"/><path class="j-xqrrbss"/></g>`,
		"fallback": "lucide:mail-question-mark",
	});
}

export default Component;
