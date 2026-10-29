import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wy9pumb-b.css';
import '../../css/r/r3yr01bjg.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/v/v5dtwfb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k wy9pumb-b"/><path class="r3yr01bjg wm-shadow"/><path class="wm-k xrfn3bcyz"/><path class="v5dtwfb0w wm-a"/></g>`,
		"fallback": "withicons:shield-question-engrave",
	});
}

export default Component;
