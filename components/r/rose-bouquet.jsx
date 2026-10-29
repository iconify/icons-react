import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ep9p02b8a.css';
import '../../css/q/q2izz5bce.css';
import '../../css/l/likqfxbjy.css';
import '../../css/l/l4sh7abkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ep9p02b8a wm-k"/><path class="q2izz5bce wm-a"/><path class="likqfxbjy"/><path class="l4sh7abkj"/></g>`,
		"fallback": "withicons-bauhaus:rose-bouquet",
	});
}

export default Component;
