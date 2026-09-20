import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y_vn7cdyd.css';
import '../../css/i/is-y3sbkr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y_vn7cdyd"/><path class="is-y3sbkr"/></g>`,
		"fallback": "streamline-flex-color:padlock-square-1-flat",
	});
}

export default Component;
