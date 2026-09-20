import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eaguzhbwz.css';
import '../../css/t/tfndbj7co.css';
import '../../css/o/o7w1_wbhx.css';
import '../../css/h/hnovqb_4l.css';
import '../../css/h/h84-17bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eaguzhbwz"/><path class="tfndbj7co"/><path class="o7w1_wbhx"/><path class="hnovqb_4l"/><path class="h84-17bec"/></g>`,
		"fallback": "streamline-freehand-color:print-text",
	});
}

export default Component;
