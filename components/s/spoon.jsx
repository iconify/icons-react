import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fo9q7n9ez.css';
import '../../css/o/ocruyxbsi.css';
import '../../css/q/qoybt6q_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="fo9q7n9ez"/><path class="ocruyxbsi"/><rect class="qoybt6q_l"/></g>`,
		"fallback": "icon-park-solid:spoon",
	});
}

export default Component;
