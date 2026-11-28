import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c843pkykg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x11pprywc.css';
import '../../css/v/vcp9f7b5e.css';
import '../../css/z/z2r0njj4k.css';
import '../../css/h/htzsep-dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c843pkykg secondary"/><g class="dt0cm9dhy primary"><path class="x11pprywc"/><path class="vcp9f7b5e"/><path class="z2r0njj4k"/><path class="htzsep-dn"/></g>`,
		"fallback": "iconaut:skateboard-duo",
	});
}

export default Component;
