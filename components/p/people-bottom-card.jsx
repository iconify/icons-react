import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o8x38jbfa.css';
import '../../css/s/sce5bfb4n.css';
import '../../css/c/czqpd_v7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o8x38jbfa"/><circle class="sce5bfb4n"/><path class="czqpd_v7c"/></g>`,
		"fallback": "icon-park-outline:people-bottom-card",
	});
}

export default Component;
