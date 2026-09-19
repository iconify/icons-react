import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hwlm2kwmc.css';
import '../../css/l/ld8emebna.css';
import '../../css/x/x83hjc4qv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hwlm2kwmc"/><path class="ld8emebna"/><rect class="x83hjc4qv"/></g>`,
		"fallback": "icon-park-solid:shovel",
	});
}

export default Component;
