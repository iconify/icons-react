import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/um015_bve.css';
import '../../css/r/rs6xfdeqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="um015_bve"/><path class="rs6xfdeqy"/></g>`,
		"fallback": "icon-park-outline:thinking-problem",
	});
}

export default Component;
