import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/j/j3pc6w1hl.css';
import '../../css/e/ec7k6mp6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="j3pc6w1hl"/><path class="ec7k6mp6h"/></g>`,
		"fallback": "icon-park:outdoor",
	});
}

export default Component;
