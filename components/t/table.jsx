import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/w/wk8bg5zve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="bwpzy-b4l"/><path class="wk8bg5zve"/></g>`,
		"fallback": "icon-park-outline:table",
	});
}

export default Component;
