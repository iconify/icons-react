import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vy6frvpsh.css';
import '../../css/l/ltxit21ma.css';
import '../../css/z/z9j_ljb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vy6frvpsh"/><path class="ltxit21ma"/><path class="z9j_ljb5j"/></g>`,
		"fallback": "streamline-sharp-color:shopping-basket-remove-flat",
	});
}

export default Component;
