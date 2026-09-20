import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n186isbrm.css';
import '../../css/z/zxyjyvbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n186isbrm"/><path class="zxyjyvbxs"/></g>`,
		"fallback": "streamline-freehand-color:job-candidate-target-1",
	});
}

export default Component;
