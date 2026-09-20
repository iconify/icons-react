import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q1nhjcbcq.css';
import '../../css/p/p3h83ob2l.css';
import '../../css/n/nlk--ac8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q1nhjcbcq"/><path class="p3h83ob2l"/><path class="nlk--ac8v"/></g>`,
		"fallback": "streamline-freehand-color:phone-actions-off",
	});
}

export default Component;
