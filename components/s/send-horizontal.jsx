import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6vcgxbtk.css';
import '../../css/d/dzfz432kr.css';
import '../../css/j/jadvwmbzo.css';
import '../../css/e/eo76imbih.css';
import '../../css/k/k8puj18zb.css';
import '../../css/p/peomxourz.css';
import '../../css/p/pn99a0c0l.css';
import '../../css/p/peoy9k0vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6vcgxbtk wm-shadow"/><path class="dzfz432kr wm-k"/><path class="jadvwmbzo wm-k"/><path class="eo76imbih wm-k"/><path class="k8puj18zb wm-k"/><path class="peomxourz wm-shine"/><path class="pn99a0c0l wm-k"/><path class="peoy9k0vx wm-a"/>`,
		"fallback": "withicons-plush:send-horizontal",
	});
}

export default Component;
