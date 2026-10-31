import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a2_8s3bfw.css';
import '../../css/m/m5pxcxkki.css';
import '../../css/y/ynudp_vpq.css';
import '../../css/l/l97em6sxe.css';
import '../../css/s/suht6v68q.css';
import '../../css/r/rfbtfgbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a2_8s3bfw wm-shadow"/><path class="m5pxcxkki"/><path class="ynudp_vpq"/><path class="l97em6sxe"/><path class="suht6v68q"/><path class="rfbtfgbye"/></g>`,
		"fallback": "withicons-retro:scan-face",
	});
}

export default Component;
