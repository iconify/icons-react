import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1r-bu86h.css';
import '../../css/f/fjmgsib9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1r-bu86h"/><path class="fjmgsib9m"/></g>`,
		"fallback": "coolicons:plane-takeoff-bulk-round",
	});
}

export default Component;
