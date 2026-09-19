import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/si5gp2b7i.css';
import '../../css/d/dx1bpub0v.css';
import '../../css/u/umf41ybqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="si5gp2b7i"/><path class="dx1bpub0v"/><path class="umf41ybqf"/></g>`,
		"fallback": "icon-park-solid:receiver",
	});
}

export default Component;
