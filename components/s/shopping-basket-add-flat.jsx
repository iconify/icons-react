import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o-24q9z2e.css';
import '../../css/w/woz4snjjd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o-24q9z2e"/><path class="woz4snjjd"/></g>`,
		"fallback": "streamline-flex-color:shopping-basket-add-flat",
	});
}

export default Component;
