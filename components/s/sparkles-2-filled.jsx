import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ed1dqw0re.css';
import '../../css/j/jesdcv9vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ed1dqw0re"/><path class="jesdcv9vd"/></g>`,
		"fallback": "tabler:sparkles-2-filled",
	});
}

export default Component;
