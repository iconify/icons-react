import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pw42tobks.css';
import '../../css/q/q7in6wbzr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="pw42tobks"/><path class="q7in6wbzr"/></g>`,
		"fallback": "cryptocurrency-color:mds",
	});
}

export default Component;
