import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sz9k32bqj.css';
import '../../css/o/ot5asko0x.css';
import '../../css/d/d3kganbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sz9k32bqj"/><path class="ot5asko0x"/><path class="d3kganbqe"/></g>`,
		"fallback": "streamline-freehand-color:office-tape-2",
	});
}

export default Component;
