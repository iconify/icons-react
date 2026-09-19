import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/po7o1smbp.css';
import '../../css/l/l3xff8bif.css';
import '../../css/m/miz2jhbir.css';
import '../../css/b/b_o-qc--s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="po7o1smbp"/><path class="l3xff8bif"/><path class="miz2jhbir"/><path class="b_o-qc--s"/></g>`,
		"fallback": "icon-park:sort-two",
	});
}

export default Component;
