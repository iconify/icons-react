import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y8xzw7j_n.css';
import '../../css/f/fdleo6bsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y8xzw7j_n"/><path class="fdleo6bsh"/></g>`,
		"fallback": "streamline-sharp-color:smart-key-flat",
	});
}

export default Component;
