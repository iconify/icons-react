import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/suyt5gbzl.css';
import '../../css/x/xiz7r7x8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="suyt5gbzl"/><path class="xiz7r7x8k"/></g>`,
		"fallback": "streamline-freehand-color:time-stopwatch",
	});
}

export default Component;
