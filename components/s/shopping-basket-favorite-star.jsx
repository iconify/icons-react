import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m-9hukb0h.css';
import '../../css/r/rg85h1bjt.css';
import '../../css/y/yq35egede.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m-9hukb0h"/><path class="rg85h1bjt"/><path class="yq35egede"/></g>`,
		"fallback": "streamline-freehand-color:shopping-basket-favorite-star",
	});
}

export default Component;
