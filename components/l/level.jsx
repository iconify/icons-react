import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d2nr6db3t.css';
import '../../css/n/ne4zzcnnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d2nr6db3t"/><path class="ne4zzcnnq"/></g>`,
		"fallback": "icon-park-outline:level",
	});
}

export default Component;
