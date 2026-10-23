import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mz8943a5h.css';
import '../../css/b/bdj0p1yfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mz8943a5h"/><path class="bdj0p1yfc"/></g>`,
		"fallback": "vadivam:square-arrow-right-exit",
	});
}

export default Component;
