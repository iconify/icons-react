import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x3uktib1g.css';
import '../../css/s/ss6r-yy7o.css';
import '../../css/i/iupnzyndz.css';
import '../../css/i/i894tjbas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="x3uktib1g"/><path class="ss6r-yy7o"/><path class="iupnzyndz"/><path class="i894tjbas"/></g>`,
		"fallback": "icon-park:men-jacket",
	});
}

export default Component;
