import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cpp5tabzk.css';
import '../../css/c/ccyl2j98s.css';
import '../../css/m/mhosczwez.css';
import '../../css/z/zj7opr_qk.css';
import '../../css/q/qm_hwpb0e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle transform="rotate(40 30.075 15.562)" class="cpp5tabzk"/><path class="ccyl2j98s"/><circle transform="rotate(40 11.24 19.34)" class="mhosczwez"/><circle transform="rotate(40 28.462 37.707)" class="zj7opr_qk"/><path class="qm_hwpb0e"/></g>`,
		"fallback": "icon-park-outline:rattle",
	});
}

export default Component;
