import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aiz3dcjyo.css';
import '../../css/c/c-wcphrmv.css';
import '../../css/q/qmnox1bpl.css';
import '../../css/z/z-xy10bpg.css';
import '../../css/v/v1r6jvbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aiz3dcjyo"/><path class="c-wcphrmv wm-shadow"/><path class="qmnox1bpl"/><path class="z-xy10bpg"/><path class="v1r6jvbof"/></g>`,
		"fallback": "withicons:laddoo-engrave",
	});
}

export default Component;
