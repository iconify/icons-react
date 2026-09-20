import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rs7apxeqd.css';
import '../../css/m/mguyo9biy.css';
import '../../css/o/oqagr1bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rs7apxeqd"/><path class="mguyo9biy"/><path class="oqagr1bdu"/></g>`,
		"fallback": "streamline-freehand-color:product-launch-laptop",
	});
}

export default Component;
