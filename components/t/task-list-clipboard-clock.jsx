import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xkabgyb9j.css';
import '../../css/u/urosuxb4j.css';
import '../../css/x/xc3sa6bii.css';
import '../../css/k/k_iln5sfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xkabgyb9j"/><path class="urosuxb4j"/><path class="xc3sa6bii"/><path class="k_iln5sfj"/></g>`,
		"fallback": "streamline-freehand-color:task-list-clipboard-clock",
	});
}

export default Component;
