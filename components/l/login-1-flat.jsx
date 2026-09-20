import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p8thm6b4v.css';
import '../../css/k/ku68o6bgx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p8thm6b4v"/><path class="ku68o6bgx"/></g>`,
		"fallback": "streamline-flex-color:login-1-flat",
	});
}

export default Component;
