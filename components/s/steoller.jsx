import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jbw-75b4r.css';
import '../../css/i/io590qi1v.css';
import '../../css/r/rr4816wue.css';
import '../../css/e/ecwa0ccvm.css';
import '../../css/l/ll1q-cdxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jbw-75b4r"/><path class="io590qi1v"/><circle class="rr4816wue"/><circle class="ecwa0ccvm"/><path class="ll1q-cdxs"/></g>`,
		"fallback": "icon-park-solid:steoller",
	});
}

export default Component;
