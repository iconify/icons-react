import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h22c8g12n.css';
import '../../css/u/urc8r32zy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h22c8g12n"/><path class="urc8r32zy"/></g>`,
		"fallback": "streamline-flex-color:video-close-captioning-flat",
	});
}

export default Component;
