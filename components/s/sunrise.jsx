import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cof-8obgv.css';
import '../../css/b/bpaoktbqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cof-8obgv"/><path class="bpaoktbqc"/></g>`,
		"fallback": "icon-park-outline:sunrise",
	});
}

export default Component;
