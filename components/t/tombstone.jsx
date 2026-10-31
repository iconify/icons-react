import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jtzlfvfrb.css';
import '../../css/k/k5gji0b3z.css';
import '../../css/f/fmi7dwbjs.css';
import '../../css/w/waro2vijr.css';
import '../../css/y/ydestl3ms.css';
import '../../css/k/kr4v636_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jtzlfvfrb wm-shadow"/><path class="k5gji0b3z"/><path class="fmi7dwbjs"/><path class="waro2vijr"/><path class="ydestl3ms"/><path class="kr4v636_b"/></g>`,
		"fallback": "withicons-retro:tombstone",
	});
}

export default Component;
