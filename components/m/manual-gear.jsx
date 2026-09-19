import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y67gvgx0g.css';
import '../../css/o/oawnutb1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="y67gvgx0g"/><path class="oawnutb1w"/></g>`,
		"fallback": "icon-park-solid:manual-gear",
	});
}

export default Component;
