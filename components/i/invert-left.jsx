import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g_py04b8w.css';
import '../../css/t/tvb2vl9-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="g_py04b8w"/><path class="tvb2vl9-r"/></g>`,
		"fallback": "icon-park-outline:invert-left",
	});
}

export default Component;
