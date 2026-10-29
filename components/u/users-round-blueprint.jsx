import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bn33k6b3q.css';
import '../../css/h/hw-fjhyxv.css';
import '../../css/l/l3uhytb6s.css';
import '../../css/y/yqrxa2brx.css';
import '../../css/o/onhn_-bqa.css';
import '../../css/v/v-aivlx4a.css';
import '../../css/t/tqj8uzelo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bn33k6b3q wm-deco"/><path class="hw-fjhyxv wm-deco"/><path class="l3uhytb6s wm-deco"/><path class="wm-k yqrxa2brx"/><path class="onhn_-bqa wm-a"/><path class="v-aivlx4a wm-k"/><path class="tqj8uzelo wm-a"/></g>`,
		"fallback": "withicons:users-round-blueprint",
	});
}

export default Component;
