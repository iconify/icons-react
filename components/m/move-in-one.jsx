import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gsy6pn1sf.css';
import '../../css/v/vxaq4rb_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="gsy6pn1sf"/><path class="vxaq4rb_l"/></g>`,
		"fallback": "icon-park-outline:move-in-one",
	});
}

export default Component;
