import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/blsw_3epl.css';
import '../../css/l/l_lv4vb-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="blsw_3epl"/><path class="l_lv4vb-l"/></g>`,
		"fallback": "icon-park-solid:sippy-cup",
	});
}

export default Component;
