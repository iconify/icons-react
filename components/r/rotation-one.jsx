import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/ka1_8zbxt.css';
import '../../css/m/mramfrb7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ka1_8zbxt"/><path class="mramfrb7o"/></g>`,
		"fallback": "icon-park-solid:rotation-one",
	});
}

export default Component;
