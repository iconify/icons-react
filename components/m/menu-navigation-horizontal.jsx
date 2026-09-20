import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w8ab97v2n.css';
import '../../css/k/kcvvg0a8o.css';
import '../../css/k/kkgxl-zeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w8ab97v2n"/><path class="kcvvg0a8o"/><path class="kkgxl-zeg"/></g>`,
		"fallback": "streamline-freehand-color:menu-navigation-horizontal",
	});
}

export default Component;
