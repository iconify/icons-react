import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i-bllxbpn.css';
import '../../css/n/npd51h74k.css';
import '../../css/k/k-rm_2xlq.css';
import '../../css/c/cw_dp9bfd.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i-bllxbpn"/><path class="npd51h74k wm-shine"/><path class="k-rm_2xlq wm-k"/><path class="cw_dp9bfd wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:star-half",
	});
}

export default Component;
