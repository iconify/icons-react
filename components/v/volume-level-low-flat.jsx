import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u2gq7p61w.css';
import '../../css/w/wqgkcq3wz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u2gq7p61w"/><path class="wqgkcq3wz"/></g>`,
		"fallback": "streamline-color:volume-level-low-flat",
	});
}

export default Component;
