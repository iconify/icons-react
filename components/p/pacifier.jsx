import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mlpd71upt.css';
import '../../css/w/w8qiybccg.css';
import '../../css/s/s-eh6tbeb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mlpd71upt"/><path class="w8qiybccg"/><path class="s-eh6tbeb"/></g>`,
		"fallback": "icon-park-solid:pacifier",
	});
}

export default Component;
