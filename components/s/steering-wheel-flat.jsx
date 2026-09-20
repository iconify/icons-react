import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dp8-k3joc.css';
import '../../css/o/o-006g4in.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dp8-k3joc"/><path class="o-006g4in"/></g>`,
		"fallback": "streamline-color:steering-wheel-flat",
	});
}

export default Component;
