import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sf-1gtb_i.css';
import '../../css/n/n0fv11e2r.css';
import '../../css/k/kvhkc1b3j.css';
import '../../css/i/ig1-7b7uv.css';
import '../../css/o/o95lhhbaw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="sf-1gtb_i"/><path class="n0fv11e2r"/><path class="kvhkc1b3j"/><path class="ig1-7b7uv"/><path class="o95lhhbaw"/></g>`,
		"fallback": "icon-park:plug",
	});
}

export default Component;
