import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t74-5_wmb.css';
import '../../css/e/ed-4tfb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t74-5_wmb"/><path class="ed-4tfb8w"/></g>`,
		"fallback": "lets-icons:sign-out-circle",
	});
}

export default Component;
