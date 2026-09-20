import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vm5w9mb2f.css';
import '../../css/l/l7h62c3sj.css';
import '../../css/h/hr1mwlb4r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vm5w9mb2f"/><path class="l7h62c3sj"/><path class="hr1mwlb4r"/></g>`,
		"fallback": "streamline-color:shopping-basket-1-flat",
	});
}

export default Component;
