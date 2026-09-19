import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hndsosv_s.css';
import '../../css/n/nq261ib2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect transform="rotate(-45 4 24)" class="hndsosv_s"/><rect transform="rotate(-45 16 24)" class="nq261ib2f"/></g>`,
		"fallback": "icon-park-outline:merge",
	});
}

export default Component;
