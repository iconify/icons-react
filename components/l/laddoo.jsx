import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qmnox1bpl.css';
import '../../css/z/z-xy10bpg.css';
import '../../css/o/o1k0c5ieu.css';
import '../../css/n/nrhd71bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qmnox1bpl"/><path class="z-xy10bpg"/><path class="o1k0c5ieu"/><path class="nrhd71bhf wm-a"/></g>`,
		"fallback": "withicons:laddoo",
	});
}

export default Component;
