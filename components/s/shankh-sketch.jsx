import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/imu2sccys.css';
import '../../css/b/bmd3pgbof.css';
import '../../css/a/a6lt9wbyk.css';
import '../../css/l/lm4f5pb4c.css';
import '../../css/a/aejpc4hlz.css';
import '../../css/j/jp6-iyb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="imu2sccys"/><path class="bmd3pgbof wm-k"/><path class="a6lt9wbyk wm-k"/><path class="lm4f5pb4c wm-a"/><path class="aejpc4hlz wm-a"/><path class="jp6-iyb4f wm-s"/></g>`,
		"fallback": "withicons:shankh-sketch",
	});
}

export default Component;
