import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6z9jmr-h.css';
import '../../css/q/q5cqyabqx.css';
import '../../css/n/nqsi145hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u6z9jmr-h"/><circle class="q5cqyabqx"/><path class="nqsi145hz"/></g>`,
		"fallback": "proicons:photo-sparkle",
	});
}

export default Component;
