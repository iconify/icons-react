import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k-t__0bsb.css';
import '../../css/o/okb87qbwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="k-t__0bsb"/><circle class="okb87qbwc"/></g>`,
		"fallback": "icon-park-solid:paragraph-round",
	});
}

export default Component;
