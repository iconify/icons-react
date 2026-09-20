import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkq_jg4qi.css';
import '../../css/v/v_775hipl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zkq_jg4qi"/><path class="v_775hipl"/></g>`,
		"fallback": "streamline-freehand-color:programming-monitor",
	});
}

export default Component;
