import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ej2rmtblx.css';
import '../../css/y/yr5bfmbag.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ej2rmtblx"/><path class="yr5bfmbag"/></g>`,
		"fallback": "streamline-color:user-check-validate-flat",
	});
}

export default Component;
