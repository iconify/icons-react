import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-ujbh_es.css';
import '../../css/n/n5j6wubbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="g-ujbh_es"/><path class="n5j6wubbb"/></g>`,
		"fallback": "icon-park-solid:multi-picture-carousel",
	});
}

export default Component;
