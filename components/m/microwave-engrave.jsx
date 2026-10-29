import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mi7v5hbvw.css';
import '../../css/a/ai5q-kbba.css';
import '../../css/t/t8-4j7c2p.css';
import '../../css/x/xww6dnqya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mi7v5hbvw wm-k"/><path class="ai5q-kbba wm-shadow"/><path class="t8-4j7c2p wm-k"/><path class="wm-a xww6dnqya"/></g>`,
		"fallback": "withicons:microwave-engrave",
	});
}

export default Component;
