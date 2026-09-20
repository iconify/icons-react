import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qlodfi8rw.css';
import '../../css/x/x35k9g5le.css';
import '../../css/t/t044i1_sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qlodfi8rw"/><path class="x35k9g5le"/><path class="t044i1_sg"/></g>`,
		"fallback": "streamline-freehand-color:rotate-lock-smartphone",
	});
}

export default Component;
