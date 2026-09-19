import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gxi7x_bbo.css';
import '../../css/t/twnxp1ntc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="gxi7x_bbo"/><path class="twnxp1ntc"/></g>`,
		"fallback": "icon-park-solid:sweater",
	});
}

export default Component;
