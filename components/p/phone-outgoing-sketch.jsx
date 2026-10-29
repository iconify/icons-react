import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w328ithck.css';
import '../../css/d/dqwndkx9y.css';
import '../../css/q/ql7xkx99v.css';
import '../../css/l/lwpbxcrve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w328ithck"/><path class="dqwndkx9y wm-s"/><path class="ql7xkx99v wm-k"/><path class="lwpbxcrve wm-s"/></g>`,
		"fallback": "withicons:phone-outgoing-sketch",
	});
}

export default Component;
