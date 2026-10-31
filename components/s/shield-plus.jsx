import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/reshl9bws.css';
import '../../css/b/bfbqg-62g.css';
import '../../css/o/ouw5kpbrn.css';
import '../../css/u/u7tu3_vxu.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="reshl9bws"/><path class="bfbqg-62g wm-shine"/><path class="ouw5kpbrn wm-k"/><path class="u7tu3_vxu wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`,
		"fallback": "withicons-kawaii:shield-plus",
	});
}

export default Component;
