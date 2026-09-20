import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o1y6l8rmk.css';
import '../../css/r/r1iymrb_r.css';
import '../../css/d/dwxujfbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o1y6l8rmk"/><path class="r1iymrb_r"/><path class="dwxujfbtm"/></g>`,
		"fallback": "streamline-freehand-color:programming-hold-code",
	});
}

export default Component;
