import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t48pb7sst.css';
import '../../css/j/jkf-dfr7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="t48pb7sst"/><path class="jkf-dfr7c"/></g>`,
		"fallback": "icon-park-solid:memory-card",
	});
}

export default Component;
