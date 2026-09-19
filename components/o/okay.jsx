import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kqhf4_bau.css';
import '../../css/i/i1mmz4b4v.css';
import '../../css/q/qqn688m2h.css';
import '../../css/i/i8ae22bkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kqhf4_bau"/><path class="i1mmz4b4v"/><path class="qqn688m2h"/><path class="i8ae22bkh"/></g>`,
		"fallback": "icon-park:okay",
	});
}

export default Component;
