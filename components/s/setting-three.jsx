import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f-eevx8wy.css';
import '../../css/j/jt31pohym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="f-eevx8wy"/><path class="jt31pohym"/></g>`,
		"fallback": "icon-park-solid:setting-three",
	});
}

export default Component;
