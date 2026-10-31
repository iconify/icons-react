import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jsrpmcc1d.css';
import '../../css/k/k37pyy31e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jsrpmcc1d"/><path class="k37pyy31e"/></g>`,
		"fallback": "withicons-retro:scan-barcode",
	});
}

export default Component;
