import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rlqc2tblo.css';
import '../../css/b/b50d454iu.css';
import '../../css/y/ykharcboa.css';
import '../../css/l/lp5-t8f8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rlqc2tblo"/><path class="b50d454iu wm-a"/><path class="wm-k ykharcboa"/><path class="lp5-t8f8t wm-a"/></g>`,
		"fallback": "withicons:octagon-x-sketch",
	});
}

export default Component;
