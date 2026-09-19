import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cz3f9ybru.css';
import '../../css/l/l-hmrlbkb.css';
import '../../css/j/j-s9jabwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cz3f9ybru"/><path class="l-hmrlbkb"/><path class="j-s9jabwv"/></g>`,
		"fallback": "icon-park-solid:pot",
	});
}

export default Component;
