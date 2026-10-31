import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3e1orbda.css';
import '../../css/d/d1u7j3bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b3e1orbda"/><path class="d1u7j3bun"/></g>`,
		"fallback": "coolicons:screwdriver-duocolor-round",
	});
}

export default Component;
