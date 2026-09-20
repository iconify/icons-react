import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ellhqbt5p.css';
import '../../css/z/zbpb0bnow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ellhqbt5p"/><path class="zbpb0bnow"/></g>`,
		"fallback": "streamline-freehand-color:presentation-projector-screen-bars",
	});
}

export default Component;
