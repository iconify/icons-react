import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eb9-j8tpe.css';
import '../../css/o/oyny2mu2z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eb9-j8tpe"/><path class="oyny2mu2z"/></g>`,
		"fallback": "healthicons:stomach-cancer2x-outline",
	});
}

export default Component;
