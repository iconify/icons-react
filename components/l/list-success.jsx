import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aiuyamb2n.css';
import '../../css/x/x5dbkkbej.css';
import '../../css/f/fee440due.css';
import '../../css/y/y0n8bl3bq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="aiuyamb2n"/><circle class="x5dbkkbej"/><circle class="fee440due"/><path class="y0n8bl3bq"/></g>`,
		"fallback": "icon-park-outline:list-success",
	});
}

export default Component;
