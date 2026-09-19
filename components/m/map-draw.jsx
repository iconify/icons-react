import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hu54_pngs.css';
import '../../css/c/c9-3hsbyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hu54_pngs"/><path class="c9-3hsbyg"/></g>`,
		"fallback": "icon-park-outline:map-draw",
	});
}

export default Component;
