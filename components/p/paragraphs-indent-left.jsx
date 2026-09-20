import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mjjcfe04t.css';
import '../../css/f/fw-s2cbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mjjcfe04t"/><path class="fw-s2cbhu"/></g>`,
		"fallback": "streamline-freehand-color:paragraphs-indent-left",
	});
}

export default Component;
