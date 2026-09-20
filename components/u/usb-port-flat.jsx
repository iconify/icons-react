import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxi2rbnm.css';
import '../../css/r/rb73n4rtg.css';
import '../../css/i/i6b6yqb7b.css';
import '../../css/a/a1345gbdw.css';
import '../../css/w/wmlchccxy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wnxi2rbnm"><path clip-rule="evenodd" class="rb73n4rtg"/><path clip-rule="evenodd" class="i6b6yqb7b"/><path clip-rule="evenodd" class="a1345gbdw"/><path class="wmlchccxy"/></g>`,
		"fallback": "streamline-plump-color:usb-port-flat",
	});
}

export default Component;
