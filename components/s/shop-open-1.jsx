import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b9l0kb1tk.css';
import '../../css/c/c6kh26bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b9l0kb1tk"/><path class="c6kh26bpg"/></g>`,
		"fallback": "streamline-freehand-color:shop-open-1",
	});
}

export default Component;
