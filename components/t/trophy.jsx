import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uopckw7hn.css';
import '../../css/w/w410nrbqo.css';
import '../../css/j/jnhf474de.css';
import '../../css/k/ksv85kbbb.css';
import '../../css/n/nure0c_4y.css';
import '../../css/n/ndp2stbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uopckw7hn wm-k"/><path class="w410nrbqo wm-deco"/><path class="jnhf474de wm-k"/><path class="ksv85kbbb wm-shadow"/><path class="nure0c_4y wm-shine"/><path class="ndp2stbqp wm-shine"/></g>`,
		"fallback": "withicons-valentine:trophy",
	});
}

export default Component;
