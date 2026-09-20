import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m09ees1ha.css';
import '../../css/o/o69jnlbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m09ees1ha"/><path class="o69jnlbef"/></g>`,
		"fallback": "reicon:planet-duotone",
	});
}

export default Component;
