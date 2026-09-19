import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/be4k6xb6p.css';
import '../../css/b/b8-2s2b6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="be4k6xb6p"/><path class="b8-2s2b6v"/></g>`,
		"fallback": "cryptocurrency-color:qsp",
	});
}

export default Component;
