import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k71kedpaw.css';
import '../../css/k/krer2skwe.css';
import '../../css/t/tq6-pqdhd.css';
import '../../css/b/b88gxzbev.css';
import '../../css/i/iib4vtwgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k71kedpaw wm-k"/><path class="krer2skwe wm-a"/><path class="tq6-pqdhd wm-shadow"/><path class="b88gxzbev wm-k"/><path class="iib4vtwgi wm-a"/></g>`,
		"fallback": "withicons:radio-tower-engrave",
	});
}

export default Component;
