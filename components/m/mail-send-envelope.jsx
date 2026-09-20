import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb0p7xb6u.css';
import '../../css/m/m5mjumbjq.css';
import '../../css/w/wuc5wnb3m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jb0p7xb6u"/><path class="m5mjumbjq"/><path class="wuc5wnb3m"/></g>`,
		"fallback": "streamline-color:mail-send-envelope",
	});
}

export default Component;
