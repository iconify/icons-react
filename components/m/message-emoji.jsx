import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fdnvodbnu.css';
import '../../css/w/w9enl3svg.css';
import '../../css/q/qv0f9kbrn.css';
import '../../css/q/qov-y5bnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="fdnvodbnu"/><path class="w9enl3svg"/><path class="qv0f9kbrn"/><path class="qov-y5bnk"/></g>`,
		"fallback": "icon-park:message-emoji",
	});
}

export default Component;
