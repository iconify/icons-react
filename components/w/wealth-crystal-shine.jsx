import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iilo8ac4m.css';
import '../../css/q/q2g1rccnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iilo8ac4m"/><path class="q2g1rccnz"/></g>`,
		"fallback": "streamline-freehand-color:wealth-crystal-shine",
	});
}

export default Component;
