import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/snsv7bb-i.css';
import '../../css/c/c7hkshaum.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="snsv7bb-i"/><path class="c7hkshaum"/></g>`,
		"fallback": "streamline-flex-color:show-layer-flat",
	});
}

export default Component;
