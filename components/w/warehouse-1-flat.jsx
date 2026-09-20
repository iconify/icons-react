import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qkl7pjbda.css';
import '../../css/u/ujk-pqo_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qkl7pjbda"/><path class="ujk-pqo_e"/></g>`,
		"fallback": "streamline-sharp-color:warehouse-1-flat",
	});
}

export default Component;
