import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omq6avb4v.css';
import '../../css/h/h_nfwkb9n.css';
import '../../css/f/fhr4ddc2g.css';
import '../../css/q/qedqngfgq.css';
import '../../css/u/uuqpt92qd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="omq6avb4v"/><path class="h_nfwkb9n"/><path class="fhr4ddc2g"/><path class="qedqngfgq"/><path class="uuqpt92qd"/></g>`,
		"fallback": "streamline-kameleon-color:scale-weight-pop",
	});
}

export default Component;
