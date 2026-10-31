import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cr9pmab7h.css';
import '../../css/q/q6bcw4b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cr9pmab7h"/><path class="q6bcw4b7e"/></g>`,
		"fallback": "coolicons:layers-duotone-round",
	});
}

export default Component;
