import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qaxulub-g.css';
import '../../css/j/jgwhkhbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qaxulub-g"/><path class="jgwhkhbfh"/></g>`,
		"fallback": "keyline-icons:megaphone-sharp-duotone",
	});
}

export default Component;
