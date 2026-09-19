import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/p/pd5gkbchm.css';
import '../../css/z/z78yszbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qtgswnn4u"/><path class="pd5gkbchm"/><path class="z78yszbru"/></g>`,
		"fallback": "icon-park-solid:mail-edit",
	});
}

export default Component;
