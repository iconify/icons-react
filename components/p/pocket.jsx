import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bg7icac4x.css';
import '../../css/e/e6q1v-bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bg7icac4x"/><path class="e6q1v-bow"/></g>`,
		"fallback": "lucide:pocket",
	});
}

export default Component;
