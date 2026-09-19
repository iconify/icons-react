import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ot2ojyb-b.css';
import '../../css/b/bk8ioe9xt.css';
import '../../css/s/soka6eb5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ot2ojyb-b"/><circle class="bk8ioe9xt"/><path class="soka6eb5z"/></g>`,
		"fallback": "icon-park-outline:passport",
	});
}

export default Component;
