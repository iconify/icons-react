import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/clsvsg_8u.css';
import '../../css/d/dlwj5t8ym.css';
import '../../css/n/nzi04mbzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="clsvsg_8u"/><circle class="dlwj5t8ym"/><path class="nzi04mbzv"/></g>`,
		"fallback": "icon-park-solid:people-top-card",
	});
}

export default Component;
