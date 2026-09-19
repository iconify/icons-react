import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xkr83qm4x.css';
import '../../css/n/nm8f33m8x.css';
import '../../css/k/ktt-wx2-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xkr83qm4x"/><path class="nm8f33m8x"/><path class="ktt-wx2-u"/></g>`,
		"fallback": "icon-park:switch-contrast",
	});
}

export default Component;
