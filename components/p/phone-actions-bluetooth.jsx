import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tqv74djqt.css';
import '../../css/b/b-_r1okzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tqv74djqt"/><path class="b-_r1okzq"/></g>`,
		"fallback": "streamline-freehand-color:phone-actions-bluetooth",
	});
}

export default Component;
