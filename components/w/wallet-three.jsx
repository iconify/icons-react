import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndq7bz-2p.css';
import '../../css/e/e8y4q8brq.css';
import '../../css/k/k1uq304yb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ndq7bz-2p"/><rect class="e8y4q8brq"/><circle transform="matrix(0 -1 -1 0 30 24)" class="k1uq304yb"/></g>`,
		"fallback": "icon-park:wallet-three",
	});
}

export default Component;
