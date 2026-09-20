import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pzivvmyfh.css';
import '../../css/z/zvuztsblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pzivvmyfh"/><path class="zvuztsblu"/></g>`,
		"fallback": "streamline-sharp-color:shopping-cart-add-flat",
	});
}

export default Component;
