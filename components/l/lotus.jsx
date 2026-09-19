import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dxeb_oimn.css';
import '../../css/t/tvvrxbc0k.css';
import '../../css/j/j5lsn12so.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dxeb_oimn"/><path class="tvvrxbc0k"/><path class="j5lsn12so"/></g>`,
		"fallback": "icon-park-outline:lotus",
	});
}

export default Component;
