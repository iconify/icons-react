import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/onao27b_c.css';
import '../../css/d/dmeb_lbay.css';
import '../../css/k/kr4h8my1w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="onao27b_c"/><path class="dmeb_lbay"/><path class="kr4h8my1w"/></g>`,
		"fallback": "devicon:tmux-wordmark",
	});
}

export default Component;
