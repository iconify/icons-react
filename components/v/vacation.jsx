import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/ktazicukk.css';
import '../../css/w/wrqafjrbc.css';
import '../../css/b/bmc7y_buz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ktazicukk"/><path class="wrqafjrbc"/><path class="bmc7y_buz"/></g>`,
		"fallback": "icon-park-outline:vacation",
	});
}

export default Component;
