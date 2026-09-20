import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w53xq5b9s.css';
import '../../css/b/bszhgib3n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w53xq5b9s"/><path class="bszhgib3n"/></g>`,
		"fallback": "streamline-flex-color:user-identifier-card-flat",
	});
}

export default Component;
