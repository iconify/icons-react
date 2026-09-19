import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i72f4jbac.css';
import '../../css/a/abtri_fkx.css';
import '../../css/s/sfy1x5b8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="i72f4jbac"/><path class="abtri_fkx"/><path class="sfy1x5b8o"/></g>`,
		"fallback": "icon-park-solid:lipstick",
	});
}

export default Component;
