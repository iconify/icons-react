import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f4skj7oxs.css';
import '../../css/f/fs8bf3t5m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f4skj7oxs"/><path class="fs8bf3t5m"/></g>`,
		"fallback": "streamline-flex-color:layers-1-flat",
	});
}

export default Component;
