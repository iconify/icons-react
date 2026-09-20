import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m_u_7zbsz.css';
import '../../css/e/eioegspql.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m_u_7zbsz"/><path class="eioegspql"/></g>`,
		"fallback": "streamline-color:polaroid-four-flat",
	});
}

export default Component;
