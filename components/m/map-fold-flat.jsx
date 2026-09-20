import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l3kyvr67c.css';
import '../../css/d/dkoo6_b6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l3kyvr67c"/><path class="dkoo6_b6h"/></g>`,
		"fallback": "streamline-plump-color:map-fold-flat",
	});
}

export default Component;
