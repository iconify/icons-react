import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cc4k4-b0i.css';
import '../../css/c/c45-6cbdn.css';
import '../../css/o/opakkwbyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="cc4k4-b0i"/><circle class="c45-6cbdn"/><path class="opakkwbyw"/></g>`,
		"fallback": "icon-park-solid:percentage",
	});
}

export default Component;
