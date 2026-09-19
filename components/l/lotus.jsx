import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rc3vcn0hy.css';
import '../../css/u/uhnuevbfl.css';
import '../../css/g/g9a30j0te.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rc3vcn0hy"/><path class="uhnuevbfl"/><path class="g9a30j0te"/></g>`,
		"fallback": "icon-park:lotus",
	});
}

export default Component;
