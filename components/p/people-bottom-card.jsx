import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o8x38jbfa.css';
import '../../css/d/dkf_gz6kq.css';
import '../../css/c/czqpd_v7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o8x38jbfa"/><circle class="dkf_gz6kq"/><path class="czqpd_v7c"/></g>`,
		"fallback": "icon-park-solid:people-bottom-card",
	});
}

export default Component;
