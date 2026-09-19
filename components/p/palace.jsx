import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aqgyq7lga.css';
import '../../css/y/y_f4_bbgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="aqgyq7lga"/><path class="y_f4_bbgw"/></g>`,
		"fallback": "icon-park-solid:palace",
	});
}

export default Component;
