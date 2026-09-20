import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gu6as2ben.css';
import '../../css/r/rhhth6bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gu6as2ben"/><path class="rhhth6bdw"/></g>`,
		"fallback": "streamline-freehand-color:laptop-action-flash",
	});
}

export default Component;
