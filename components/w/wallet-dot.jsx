import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3uljwbet.css';
import '../../css/v/v4pp43bue.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g3uljwbet"/><path clip-rule="evenodd" class="v4pp43bue"/></g>`,
		"fallback": "gravity-ui:wallet-dot",
	});
}

export default Component;
