import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/amquopt5s.css';
import '../../css/x/xcu0ugb_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="amquopt5s"/><path class="xcu0ugb_i"/></g>`,
		"fallback": "icon-park-outline:playback-progress",
	});
}

export default Component;
