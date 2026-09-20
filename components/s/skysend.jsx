import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f98_wzbml.css';
import '../../css/x/x7fbr_9zx.css';
import '../../css/q/qel1w3bxf.css';
import '../../css/i/i9tlogzjj.css';
import '../../css/k/kl6aatf2o.css';
import '../../css/b/bgs6ldqvc.css';
import '../../css/s/sam4fza3d.css';
import '../../css/i/id729uzcp.css';
import '../../css/w/wns4ztdfm.css';
import '../../css/q/qmi95zuoi.css';
import '../../css/z/zuh25wb4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f98_wzbml"/><path class="x7fbr_9zx"/><path class="qel1w3bxf"/><path class="i9tlogzjj"/><path class="kl6aatf2o"/><path class="bgs6ldqvc"/><path class="sam4fza3d"/><path class="id729uzcp"/><path class="wns4ztdfm"/><path class="qmi95zuoi"/><path class="zuh25wb4l"/>`,
		"fallback": "selfhst:skysend",
	});
}

export default Component;
