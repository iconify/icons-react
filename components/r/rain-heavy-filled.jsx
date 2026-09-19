import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gpia6obbj.css';
import '../../css/q/q1z7btrbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gpia6obbj"/><path class="q1z7btrbc"/></g>`,
		"fallback": "griddy-icons:rain-heavy-filled",
	});
}

export default Component;
