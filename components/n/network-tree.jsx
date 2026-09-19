import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sjlfvghmr.css';
import '../../css/x/x0e8mvpdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="sjlfvghmr"/><path class="x0e8mvpdz"/></g>`,
		"fallback": "icon-park-outline:network-tree",
	});
}

export default Component;
