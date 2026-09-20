import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kkouyybcu.css';
import '../../css/w/wnm8elbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kkouyybcu"/><path class="wnm8elbzp"/></g>`,
		"fallback": "streamline-freehand-color:lock-circle",
	});
}

export default Component;
