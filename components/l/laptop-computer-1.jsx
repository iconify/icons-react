import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s5mr3vikb.css';
import '../../css/c/cry6vccsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s5mr3vikb"/><path class="cry6vccsx"/></g>`,
		"fallback": "streamline-freehand-color:laptop-computer-1",
	});
}

export default Component;
