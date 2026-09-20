import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gsxvzbw6s.css';
import '../../css/d/dnbsrcc0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gsxvzbw6s"/><path class="dnbsrcc0y"/></g>`,
		"fallback": "streamline-freehand-color:programming-search",
	});
}

export default Component;
