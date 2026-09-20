import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dkkvodt2e.css';
import '../../css/x/xprivsdxn.css';
import '../../css/i/igau38bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dkkvodt2e"/><path class="xprivsdxn"/><path class="igau38bez"/></g>`,
		"fallback": "streamline-ultimate:notes-tasks",
	});
}

export default Component;
