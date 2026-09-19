import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/o/oq8pnh08o.css';
import '../../css/m/mt4xtbcfi.css';
import '../../css/k/k1369qbgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="oq8pnh08o"/><path class="mt4xtbcfi"/><path class="k1369qbgk"/></g>`,
		"fallback": "icon-park-solid:soccer",
	});
}

export default Component;
