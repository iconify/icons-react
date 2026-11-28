import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pd676ibgx.css';
import '../../css/g/gg9wmeb9k.css';
import '../../css/q/qtkp067nn.css';
import '../../css/n/nud13jbvm.css';
import '../../css/v/vr818jaan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pd676ibgx"/><path class="gg9wmeb9k"/><path class="qtkp067nn"/><path class="nud13jbvm"/><path class="vr818jaan"/></g>`,
		"fallback": "iconaut:iv-bag",
	});
}

export default Component;
