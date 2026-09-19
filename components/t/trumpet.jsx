import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4s2ozb3b.css';
import '../../css/m/mxet0mb0h.css';
import '../../css/x/xg6mc2bsh.css';
import '../../css/o/ok76dmb-q.css';
import '../../css/q/q2ragshzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4s2ozb3b"/><path class="mxet0mb0h"/><path class="xg6mc2bsh"/><path class="ok76dmb-q"/><path class="q2ragshzl"/>`,
		"fallback": "fxemoji:trumpet",
	});
}

export default Component;
