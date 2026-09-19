import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p4ajywi4n.css';
import '../../css/x/x8-ol5b7y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="p4ajywi4n"/><path class="x8-ol5b7y"/></g>`,
		"fallback": "cryptocurrency-color:nmc",
	});
}

export default Component;
