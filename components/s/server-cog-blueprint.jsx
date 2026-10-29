import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wihllw7_u.css';
import '../../css/m/m4x4acctj.css';
import '../../css/v/vr719mtpn.css';
import '../../css/x/xclfmwiju.css';
import '../../css/r/r1oo99bph.css';
import '../../css/t/tgjlk-qqh.css';
import '../../css/n/nufwbmbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wihllw7_u wm-deco"/><path class="m4x4acctj wm-deco"/><path class="vr719mtpn wm-k"/><path class="wm-a xclfmwiju"/><path class="r1oo99bph wm-s"/><path class="tgjlk-qqh wm-a"/><path class="nufwbmbhe wm-k"/></g>`,
		"fallback": "withicons:server-cog-blueprint",
	});
}

export default Component;
