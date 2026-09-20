import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/b5cxlbb9z.css';
import '../../css/s/s1i6yv5uk.css';
import '../../css/k/k-e2t9i7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="b5cxlbb9z"/><path class="s1i6yv5uk"/><path class="k-e2t9i7d"/></g>`,
		"fallback": "lets-icons:pressure-light",
	});
}

export default Component;
