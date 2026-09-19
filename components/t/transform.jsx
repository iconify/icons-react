import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/umfll9bys.css';
import '../../css/c/ceqznzypa.css';
import '../../css/h/h77qjobjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="umfll9bys"/><circle class="ceqznzypa"/><path class="h77qjobjk"/></g>`,
		"fallback": "icon-park-solid:transform",
	});
}

export default Component;
