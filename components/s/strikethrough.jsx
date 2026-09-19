import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rljxo28vb.css';
import '../../css/i/imhi0yb-x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rljxo28vb"/><path class="imhi0yb-x"/></g>`,
		"fallback": "icon-park-outline:strikethrough",
	});
}

export default Component;
