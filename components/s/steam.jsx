import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsofbs0hl.css';
import '../../css/s/sl2chczps.css';
import '../../css/u/ub4ctds7g.css';
import '../../css/p/pj-urkbsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsofbs0hl"/><g class="sl2chczps"><path class="ub4ctds7g"/><path class="pj-urkbsg"/></g>`,
		"fallback": "flat-color-icons:steam",
	});
}

export default Component;
