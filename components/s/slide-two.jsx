import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x62k7r4dq.css';
import '../../css/h/hzygurb-i.css';
import '../../css/t/trxtqublk.css';
import '../../css/e/e17s8mhzh.css';
import '../../css/s/s0z9zo7dh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="x62k7r4dq"/><path clip-rule="evenodd" class="hzygurb-i"/><path class="trxtqublk"/><path class="e17s8mhzh"/><path class="s0z9zo7dh"/></g>`,
		"fallback": "icon-park:slide-two",
	});
}

export default Component;
