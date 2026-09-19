import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xkmhv9b-n.css';
import '../../css/g/g-9hgrbem.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="xkmhv9b-n"/><path class="g-9hgrbem"/></g>`,
		"fallback": "cryptocurrency-color:spacehbit",
	});
}

export default Component;
