import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dxeb_oimn.css';
import '../../css/l/ll17zo0eo.css';
import '../../css/o/o0rnf8isg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dxeb_oimn"/><path class="ll17zo0eo"/><path class="o0rnf8isg"/></g>`,
		"fallback": "icon-park-solid:lotus",
	});
}

export default Component;
