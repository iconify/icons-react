import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gu31zbb5z.css';
import '../../css/k/keyd3_dzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gu31zbb5z"/><path class="keyd3_dzd"/></g>`,
		"fallback": "streamline-freehand-color:learning-programming-flag",
	});
}

export default Component;
