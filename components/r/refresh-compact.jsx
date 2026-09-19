import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/as-0c8b1d.css';
import '../../css/n/ngboggbka.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="as-0c8b1d"/><path class="ngboggbka"/></g>`,
		"fallback": "codicon:refresh-compact",
	});
}

export default Component;
