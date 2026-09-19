import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l29-8do0v.css';
import '../../css/t/t2b40pbhl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="l29-8do0v"/><path class="t2b40pbhl"/></g>`,
		"fallback": "cryptocurrency-color:nlg",
	});
}

export default Component;
