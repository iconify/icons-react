import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q-pan9bpu.css';
import '../../css/a/afa_ehb-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q-pan9bpu"/><path class="afa_ehb-q"/></g>`,
		"fallback": "icon-park-solid:multi-triangular-two",
	});
}

export default Component;
