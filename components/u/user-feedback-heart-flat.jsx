import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yuxjgfvmt.css';
import '../../css/t/te5eahbak.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yuxjgfvmt"/><path class="te5eahbak"/></g>`,
		"fallback": "streamline-flex-color:user-feedback-heart-flat",
	});
}

export default Component;
