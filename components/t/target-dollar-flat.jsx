import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/ki2comxki.css';
import '../../css/k/ku402q_jx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ki2comxki"/><path class="ku402q_jx"/></g>`,
		"fallback": "streamline-flex-color:target-dollar-flat",
	});
}

export default Component;
