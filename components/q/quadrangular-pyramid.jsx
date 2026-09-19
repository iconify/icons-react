import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rx93in87k.css';
import '../../css/s/s3nq39rtz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rx93in87k"/><path class="s3nq39rtz"/></g>`,
		"fallback": "icon-park-outline:quadrangular-pyramid",
	});
}

export default Component;
